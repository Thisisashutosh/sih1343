import numpy as np
import os
import cv2
import tensorflow as tf
from tqdm import tqdm
import matplotlib.pyplot as plt
from sklearn.utils import shuffle
from PIL import Image, ImageOps 

# from google.colab import drive
# drive.mount('/content/drive')

class_names = ['Aloe barbadensis miller (Aloevera)', 'Alpinia Galanga (Rasna)', 'Artocarpus Heterophyllus (Jackfruit)', 'Azadirachta Indica (Neem)', 'Basella Alba (Basale)', 'Brassica Juncea (Indian Mustard)', 'Carissa Carandas (Karanda)', 'Citrus Limon (Lemon)', 'Ficus Religiosa (Peepal Tree)', 'Jasminum (Jasmine)', 'Mangifera Indica (Mango fruit)', 'Mangifera Indica (Mango leaf)', 'Mentha (Mint)', 'Moringa Oleifera (Drumstick)', 'Ocimum Tenuiflorum (Tulsi)', 'Piper Betle (Betel)', 'Psidium Guajava (Guava fruit)', 'Psidium Guajava (Guava leaf)', 'Punica Granatum (Pomegranate)', 'Rosa-sinensis (Hibiscus)', 'Santalum Album (Sandalwood)', 'Syzygium Cumini (Jamun)', 'Syzygium Jambos (Rose Apple)', 'Zingiber officinale Roscoe (Ginger)']

IMAGE_SIZE = (150, 150)

def pre_process(img_path):
    image = cv2.imread(img_path)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image = cv2.resize(image, IMAGE_SIZE)
    return image

def load_data(training_dataset_paths, testing_image_path):
    train_data = []

    # Load training data
    for dataset_path in training_dataset_paths:
        images = []
        labels = []

        print("Loading training dataset: {}".format(dataset_path))

        for folder in os.listdir(dataset_path):
            label = class_names.index(folder)  # Get label index from class_names

            folder_path = os.path.join(dataset_path, folder)

            for file in tqdm(os.listdir(folder_path)):
                img_path = os.path.join(folder_path, file)

                # Assuming you have a pre_process function defined
                image = pre_process(img_path)

                if image is not None:  # Check if pre_process successfully loaded the image
                    images.append(image)
                    labels.append(label)

        images = np.array(images, dtype='float32')
        labels = np.array(labels, dtype='int32')

        train_data.append((images, labels))

    # Load the single testing image
    test_images = [pre_process(testing_image_path)]

    return train_data, test_images

# Define paths to your training dataset and the single testing image
train_datasets = ['../SET/Train']
test_image_path = '../SET/Test/OT-S-010.jpg'

train_data, test_images = load_data(train_datasets, test_image_path)

# Shuffle training data
train_images, train_labels = train_data[0]
train_images, train_labels = shuffle(train_images, train_labels, random_state=25)

n_train = train_labels.shape[0]

print("Number of training examples: {}".format(n_train))
print("Number of testing examples: 1")  # Only one test image
print("Each image is of size: {}".format(IMAGE_SIZE))

train_images = train_images / 255.0
test_images = np.array(test_images, dtype='float32') / 255.0

# Define the model
model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(150, 150, 3)),
    tf.keras.layers.MaxPooling2D(2, 2),
    tf.keras.layers.Conv2D(32, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D(2, 2),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(128, activation=tf.nn.relu),
    tf.keras.layers.Dense(30, activation=tf.nn.softmax)
])

# Compile the model
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

# Train the model
history = model.fit(train_images, train_labels, batch_size=128, epochs=20, validation_split=0.2)

# Plot accuracy and loss
def plot_accuracy_loss(history):
    fig = plt.figure(figsize=(10, 5))

    # Plot accuracy
    plt.subplot(221)
    plt.plot(history.history['accuracy'], 'bo--', label="accuracy")
    plt.plot(history.history['val_accuracy'], 'ro--', label="val_accuracy")
    plt.title("train_acc vs val_acc")
    plt.ylabel("accuracy")
    plt.xlabel("epochs")
    plt.legend()

    # Plot loss function
    plt.subplot(222)
    plt.plot(history.history['loss'], 'bo--', label="loss")
    plt.plot(history.history['val_loss'], 'ro--', label="val_loss")
    plt.title("train_loss vs val_loss")
    plt.ylabel("loss")
    plt.xlabel("epochs")

    plt.legend()
    plt.show()

# Plot accuracy and loss
plot_accuracy_loss(history)

# Load the single testing image
test_images = [pre_process(test_image_path)]

# Preprocess the test image and normalize it
test_images = np.array(test_images, dtype='float32') / 255.0

# Use the model to predict the label for the test image
predictions = model.predict(test_images)  # Vector of probabilities
predicted_label = np.argmax(predictions[0])  # Find the label with the highest probability

# Print the predicted label
print("Predicted Label:", class_names[predicted_label])