# main.py
from fastapi import FastAPI, HTTPException
import requests
import os

app = FastAPI()


@app.get('/filmes')
async def buscar_filmes():
    # Endpoint para buscar filmes na API The One.
    api_url = 'https://the-one-api.dev/v2/movie'

    API_KEY = os.getenv('API_KEY')

    # Realizando a requisição GET
    response = requests.get(api_url, headers={'Authorization': 'Bearer ' + API_KEY})

    # Verificando se a requisição foi bem sucedida (código 200)
    if response.status_code == 200:
        return response.json()
    else:
        raise HTTPException(status_code=500, detail='Erro ao buscar filmes')
