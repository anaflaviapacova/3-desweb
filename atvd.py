import requests

endpoint = "https://jsonplaceholder.typicode.com/posts/1"

resposta = requests.get(endpoint)

if resposta.ok:
    conteudo = resposta.json()
    print("Título do post:", conteudo["title"])
    print("Texto:", conteudo["body"])
else:
    print(f"Falha ao obter os dados. Código de status: {resposta.status_code}")
