import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, LSTM, Dense, Dropout

import pickle
import numpy as np
import sys
sys.stdout.reconfigure(encoding='utf-8')

sentences = [
    # Real Estate Sentences (Label 1)
    'Looking for a luxury house in Colombo with a swimming pool and garden.'
    'Looking for a luxury house in Colombo with a farmhouse.'
    'This house has three bedrooms and a spacious backyard.',
    'Looking to buy a house with a modern kitchen.',
    'I need a rental with at least two bathrooms.',
    'Renting a townhouse with access to a swimming pool.',
    'Looking for a loft apartment in a trendy neighborhood.',
    'This apartment has hardwood floors and updated appliances.',
    'Looking for a house with a large backyard for gardening.',
    'Renting a furnished apartment for short-term stay.',
    'Looking to buy a waterfront property with a dock.',
    'This house is located in a quiet residential area.',
    'Looking for a duplex with separate entrances.',
    'Renting a penthouse with panoramic views of the city.',
    'This condo has stainless steel appliances.',

    'Looking for a penthouse with a rooftop terrace.',
    'This loft apartment has exposed brick walls.',
    'Renting a luxury apartment with concierge service.',
    'This villa has a private pool and stunning ocean views.',
    'Seeking a spacious family home with a large yard.',
    'Looking for a modern condo in a walkable neighborhood.',
    'This townhouse is move-in ready and comes with all appliances.',
    'Beautiful 3-bedroom house for sale in a desirable school district.',
    'Newly renovated apartment in a historic building.',
    'Looking to buy a fixer-upper with potential for investment.',
    'Renting a cozy cabin in the mountains for a weekend getaway.',
    'Looking for a farm house with plenty of acreage.',
    'Modern apartment building with rooftop terrace and gym.',
    'Studio apartment available for rent in a prime location.',
    'Looking to buy a commercial property for a small business.',
    'Renting a warehouse space for storage and distribution.',
    'This house has a large kitchen with granite countertops and stainless steel appliances.',
    'Searching for a beachfront condo with easy access to water activities.',
    'This property has a spacious backyard perfect for entertaining guests.',
    'Seeking a quiet cottage in a rural setting with scenic views.',
    'Renting a furnished apartment with all utilities included.',
    'Looking for a pet-friendly apartment with a dog park nearby.',
    'This condo has a balcony with breathtaking city views.',
    'Newly built townhouses with modern finishes and energy-efficient features.',
    'Seeking a spacious home with a home office and ample storage.',
    'This property is ideal for a growing family with multiple bedrooms and a large yard.',
    'Looking for a rental property with a flexible lease agreement.',
    'This apartment complex has a swimming pool, fitness center, and community room.',
    'Spacious loft with high ceilings and industrial-style design.',
    'Beautiful Victorian home with original woodwork and stained glass windows.',
    'Seeking a charming cottage with a white picket fence and garden.',
    'This house has a gourmet kitchen with a wine cellar and breakfast nook.',
    'Looking to buy a house in Colombo with a swimming pool.',
    'This apartment in Kandy has two bedrooms and a balcony.',
    'Seeking a villa in Galle with ocean views and a private pool.',
    'Renting a furnished apartment in Nuwara Eliya for a short-term stay.',
    'This house in Jaffna has a large garden and is pet-friendly.',
    'Looking to buy a plot of land in Anuradhapura for building a new home.',
    'This luxury apartment in Colombo has a gym and concierge service.',
    'Renting a two-story house in Matara with a spacious backyard.',
    'Looking for a penthouse in Negombo with views of the lagoon.',
    'This house in Batticaloa is located near schools and shopping centers.',
    'Looking for a house in Kandy with at least four bedrooms.',
    'Renting a beach house in Trincomalee with direct access to the shore.',
    'Looking for a modern apartment in Colombo with a swimming pool and gym.',
    'This condo in Galle has a rooftop terrace and stunning ocean views.',
    'Seeking a house in Jaffna with a separate guest room and home office.',
    'Looking to rent a villa in Hikkaduwa for a weekend getaway.',
    'This luxury villa in Bentota comes with a private pool and garden.',
    'Seeking a commercial property in Colombo for a small business.',
    'Looking to buy an apartment in Wellawatte with a city view.',
    'This house in Batticaloa has hardwood floors and updated appliances.',
    'Looking to rent a house in Kalutara with a garden and parking space.',
    'This bungalow in Nuwara Eliya has a fireplace and mountain views.',
    'Seeking a commercial building in Ratnapura for a retail business.',
    'Looking to buy an estate in Badulla with tea plantations.',
    'Renting a villa in Hambantota with beachfront access and a swimming pool.',
    'This house in Kurunegala has a large living area and modern kitchen.',
    'Seeking a penthouse in Negombo with ocean views and a private elevator.',
    'Looking for an apartment in Dehiwala with easy access to public transport.',
    'Renting a furnished apartment in Panadura near the railway station.',
    'This luxury condo in Mount Lavinia comes with a rooftop pool and gym.',
    'Looking to buy a commercial space in Dambulla for a restaurant business.',
    'Seeking a house in Kalutara with river views and a boat dock.',
    'This villa in Tangalle has a private beach and an infinity pool.',
    'Renting a two-bedroom apartment in Gampaha with air conditioning and Wi-Fi.',
    'Looking for a colonial-style house in Matale with a large veranda.',
    'This apartment in Ja-Ela has secure parking and access to a private garden.',
    'Looking to buy a house in Vavuniya with a spacious courtyard and parking.',
    'Seeking a beachfront property in Beruwala with a garden and guest house.',
    'This apartment in Wattala comes with 24-hour security and a children play area.',
    'Looking to rent a holiday home in Polonnaruwa with a swimming pool and garden.',
    'This house in Ampara is close to schools and hospitals and has a large backyard.',
    'Seeking a house in Puttalam with solar panels and rainwater harvesting.',
    'Looking for a commercial property in Chilaw for a new office.',
    'Renting a house in Kegalle with a garage and a landscaped garden.',
    'This house in Monaragala has a well-maintained garden and space for pets.'

    # Non-Real Estate Sentences (Label 0)
    'What time is the next train to Colombo?',
    'Can you recommend a good restaurant near here?',
    'What are the best hiking trails in Sri Lanka?',
    'How do I get to the nearest beach?',
    'Where can I buy fresh produce in Badulla?',
    'What are the must-see attractions in Ella?',
    'Where can I find a good tuk-tuk driver?',
    'How much does it cost to hire a car for a day?',
    'What''s the best time of year to visit Sri Lanka?',
    'Can you tell me about the local culture and traditions?',
    'Where can I learn to surf in Sri Lanka?',
    'What are some good souvenirs to buy in Sri Lanka?',
    "What's the weather like in Nuwara Eliya?",
    'How do I get a SIM card for my phone?',
    'Where can I try authentic Sri Lankan cuisine?',
    'What are the local customs and etiquette?',
    'Where can I find a good place to get a massage?',
    'What are some interesting historical sites in Sri Lanka?',
    'How do I say "thank you" in Sinhala?',
    'Where can I learn about Buddhist teachings in Sri Lanka?',
    'What are some good books about Sri Lankan history?',
    'Can you recommend a reliable tour guide?',
    'Where can I find information about local festivals and events?',
    'How do I get to Adam''s Peak from Badulla''?',
    'What are some good places to go birdwatching in Sri Lanka?',
    'Where can I buy traditional Sri Lankan handicrafts?',
    'How do I get to the tea plantations in Nuwara Eliya?',
    'What are some good places to go camping in Sri Lanka?',
    'Where can I find a good place to practice yoga?',
    'How can I learn more about the wildlife in Sri Lanka?'
    'What are the best restaurants in Kandy?',
    'How do I get to the train station in Colombo?',
    'Can you recommend some tourist attractions in Galle?',
    'What time does the bus leave for Jaffna?',
    'Where can I buy fresh fruits and vegetables in Matara?',
    'Can you help me find a good hotel in Nuwara Eliya?',
    'How much does a tuk-tuk ride cost in Colombo?',
    'What is the best time to visit Trincomalee for whale watching?',
    'Where can I learn to surf in Arugam Bay?',
    'What are the local customs and traditions in Sri Lanka?',
    'What are the best hiking trails in Ella?',
    'Where can I find a good coffee shop in Colombo?',
    'How do I get from Kandy to Sigiriya?',
    'Can you recommend a reliable taxi service in Galle?',
    'What souvenirs should I buy in Sri Lanka?',
    'Where can I rent a bicycle in Nuwara Eliya?',
    'Can you recommend a yoga class in Negombo?',
    'What are the best places for birdwatching in Yala National Park?',
    'How can I hire a tour guide in Colombo?',
    'What is the weather like in Anuradhapura during December?'
]

labels = [
    1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1,1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]



# Tokenize and pad sequences
tokenizer = Tokenizer(num_words=10000, oov_token='<OOV>')
tokenizer.fit_on_texts(sentences)
word_index = tokenizer.word_index
sequences = tokenizer.texts_to_sequences(sentences)
padded_sequences = pad_sequences(sequences, padding='post')


labels = np.array(labels)


with open('tokenizer.pickle', 'wb') as handle:
    pickle.dump(tokenizer, handle, protocol=pickle.HIGHEST_PROTOCOL)


model = Sequential([
    Embedding(input_dim=10000, output_dim=16, input_length=padded_sequences.shape[1]),
    LSTM(32, return_sequences=True),
    Dropout(0.2),
    LSTM(32),
    Dense(24, activation='relu'),
    Dropout(0.2),
    Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

if padded_sequences.shape[0] != labels.shape[0]:
    min_length = min(padded_sequences.shape[0], labels.shape[0])
    padded_sequences = padded_sequences[:min_length]
    labels = labels[:min_length]
    
dataset = tf.data.Dataset.from_tensor_slices((padded_sequences, labels)).batch(2)


model.fit(dataset, epochs=100, verbose=1)


model.save('nlp_model.h5')
