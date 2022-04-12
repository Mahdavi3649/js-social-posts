/*  
    Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
    Gli attributi minimi del modello di un post: id, contenuto, immagine, autore (nome, avatar), numero di likes, data creazione.
    Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.
*/



//  creare dell'Array di oggetti per post:


const posts = [
    {
        id: "1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quas, beatae delectus illum non natus modi doloremque fugiat, quibusdam laborum eveniet porro a placeat blanditiis nihil facilis repudiandae possimus suscipit, commodi alias amet earum! Doloremque.",
        image: "https://i.picsum.photos/id/16/300/300.jpg?hmac=2Su1BGuhhzPdRJSgk_MKu0eOU5fOTFIMMj4dqpJAThs",
        writer: "Phil Mangione",
        imgAvatar: "https://i.picsum.photos/id/15/300/300.jpg?hmac=duO4muNveDNzr4xn5Eqb6hWLvRdkHkS-F4mMsa6p6jg",
        likes: 33,
        creationDate: "22/3/2021"
    },
    {
        id: "2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam voluptate maiores inventore nobis animi suscipit magni, quis eveniet corporis!",
        image: "https://i.picsum.photos/id/1003/367/267.jpg?hmac=1VHS13exKZ5QWJdtDTu0iCUTBZKCE_clSpR-wc3PW3g",
        writer: "Sofia Perlari",
        imgAvatar: "https://i.picsum.photos/id/871/300/300.jpg?hmac=LHkUU7reAw_BdSJEy71TImEmdN5e8tw8-MxQljjitPg",
        likes: 57,
        creationDate: "09/01/2022"
    }
]


let postsThatILike = [];
// Mandare a schermo i post per ogni oggetto dell'array posts | stampiamo i post del nostro feed:
for (i=0; i<posts.length; i++) {

    const post = posts[i];
    
    const postPrinted = `
        <div class="post">
            <header class="post_header">
                <img src=${post.imgAvatar} alt="">
                <section class="published">
                 <div><h4>${post.writer}</h4></div>   
                    <div>${post.creationDate}</div>
                </section>
            </header>
            <main class="post_main">
                <p>${post.content}</p>
                <img src="${post.image}" alt="">
            </main>
            <footer class="post_footer">
                <div class="add_like"><i class="fa-solid fa-thumbs-up"></i> Mi piace</div>
                <div class="total_like">Piace a ${post.likes} persone</div>
            </footer>
        </div>`

    document.querySelector(".container").insertAdjacentHTML("beforebegin", postPrinted);


   

}

 /* Milestone 3 */
/*  Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
 */ 
        const likeElement = document.querySelector('.add_like')
        //ascolto per il click
        likeElement.addEventListener('click', function () {
            //coloro di blue al click
            likeElement.classList.add("blue")
        })




