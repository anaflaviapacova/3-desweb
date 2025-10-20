async function carregarPost() {
  const endpoint = "https://jsonplaceholder.typicode.com/posts/1";

  try {
    const resposta = await fetch(endpoint);

    if (!resposta.ok) {
      throw new Error(`Falha ao buscar o post. Código: ${resposta.status}`);
    }

    const post = await resposta.json();
    console.log("Título do Post:", post.title);
    console.log("Conteúdo:", post.body);
    
  } catch (erro) {
    console.error("Erro encontrado:", erro.message);
  }
}

carregarPost();
