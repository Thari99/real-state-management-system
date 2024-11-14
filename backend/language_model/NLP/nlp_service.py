from models import House
from language_model.NLP.nlp_module import NLPModule
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
import os;
from pathlib import Path

class nlpService:
    def __init__(self):
        self.nlp_module = NLPModule()

        current_file = Path(__file__)
        db_path = current_file.parent.parent.parent / 'instance' / 'flaskdb.db'
        #db_path_str = str(db_path)

        
        # Database connection
        DATABASE_URL = f"sqlite:///{db_path}"  

        if os.path.exists(db_path):
            print("SQLAlchemy database connection successful")
        else:
            print(f"SQLAlchemy database connection failed. Database file not found at: {db_path}")
        
        self.engine = create_engine(DATABASE_URL)
        self.Session = sessionmaker(bind=self.engine)
        
    def search_properties(self, query: str) -> list:
        # Use the NLP module to predict keywords from the query
        keywords = self.nlp_module.predict(query)

        if keywords:
            print(f"Extracted keywords: {keywords}")
            
            # Fetch and return the matching properties
            properties = self.get_properties_by_keywords(keywords)
            return properties
        else:
            print("No relevant keywords found.")
            return []  

    def get_properties_by_keywords(self, keywords: list) -> list:
        #print("Keywords to search: ", keywords)
        matching_properties = []
        
        
        with self.Session() as session:
            for keyword in keywords:
               
                properties = session.query(House).filter(House.description.ilike(f'%{keyword}%')).all()
                print(str(session.query(House).filter(House.description.ilike(f'%{keyword}%'))))
                print("Final Matching Properties: ")

                for prop in properties:
                    print(f"Match found! Adding property: {prop.description}")
                    
                    matching_properties.append({
                        'id': prop.id,
                    })

                    if matching_properties == True:
                        print("Found properties")

        print("Final Matching Properties: ", matching_properties)
        
        return matching_properties 
