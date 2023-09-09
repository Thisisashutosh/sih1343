# Define the function to make predictions on a single image
# from model import class_names
# from model import model
import tensorflow as tf
import numpy as np
from PIL import Image, ImageOps
import json
import sys

model = tf.keras.models.load_model('./ml/model_sev.h5')

class_names = ['Aloe barbadensis miller (Aloevera)', 'Alpinia Galanga (Rasna)', 'Artocarpus Heterophyllus (Jackfruit)', 'Azadirachta Indica (Neem)', 'Basella Alba (Basale)', 'Brassica Juncea (Indian Mustard)', 'Carissa Carandas (Karanda)', 'Citrus Limon (Lemon)', 'Ficus Religiosa (Peepal Tree)', 'Jasminum (Jasmine)', 'Mangifera Indica (Mango fruit)', 'Mangifera Indica (Mango leaf)',
               'Mentha (Mint)', 'Moringa Oleifera (Drumstick)', 'Ocimum Tenuiflorum (Tulsi)', 'Piper Betle (Betel)', 'Psidium Guajava (Guava fruit)', 'Psidium Guajava (Guava leaf)', 'Punica Granatum (Pomegranate)', 'Rosa-sinensis (Hibiscus)', 'Santalum Album (Sandalwood)', 'Syzygium Cumini (Jamun)', 'Syzygium Jambos (Rose Apple)', 'Zingiber officinale Roscoe (Ginger)']


def predict_single_image(image_path, model, class_names):
    data = np.ndarray(shape=(1, 150, 150, 3), dtype=np.float32)

    # Open the image using PIL
    image = Image.open(image_path)

    # Resize the image
    size = (150, 150)
    image = ImageOps.fit(image, size, Image.ANTIALIAS)

    # Convert the image to a numpy array
    image_array = np.asarray(image)

    # Normalize the image
    normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1

    # Load the image into the array
    data[0] = normalized_image_array

    # Run the inference
    prediction = model.predict(data)

    # Get the predicted label
    pred_label = np.argmax(prediction, axis=1)

    # Get the corresponding class name
    class_prediction = class_names[pred_label[0]]

    return class_prediction


# Example usage:
name = sys.argv[1]
test_image_path = name
predicted_class = predict_single_image(test_image_path, model, class_names)
response_data = {
    "result": predicted_class
}
json_data = json.dumps(response_data)
print(json_data)
