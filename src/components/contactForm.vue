<script setup>
import { ref } from "vue";

const responseMessage = ref('');

async function submit(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("http://127.0.0.1:8000/api/registro", {
        method: "POST",
        body: formData
    });
    clear();
    const data = await response.json();
    responseMessage.value = data.message;
}
function clear(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("mensaje").value = "";
}
</script>
<template>
    <div class="formulario-de-contacto">
        <div class="contacto-text">
            <h2>Hablemos</h2>
            <span>Atendemos tu solicitud lo antes posible.</span>
        </div>
        <div class="contacto-row">
            <form class="contactForm" @submit="submit">
                <div class="form-row">
                    <div class="form-column">
                        <label>Nombre</label>
                        <input id="nombre" type="text" name="nombre" required>
                    </div>
                    <div class="form-column">
                        <label>Apellido</label>
                        <input id="apellido" type="text" name="apellido" required>
                    </div>
                </div>
                <label>Correo</label>
                <input id="mail" type="email" name="correo" required>
                <label id="mensaje" class="textArea">Mensaje</label>
                <textarea class="textArea" type="text" name="mensaje" required/>
                <input type="submit" value="Enviar">
            </form>
            <div class="linea"></div>
            <div class="side-form">
                <div class="call-us">
                    <span class="title">Llámanos</span>
                    <span>Te atendemos en horario de oficina.</span>
                    <span>(0973) 236-438</span>
                </div>
                <div class="social-media">
                    <span class="title">
                        Conocenos
                    </span>
                    <span>Leemos tus mensajes en redes sociales.</span>
                    <figure>
                        <!-- <img src="./img/social-instagram.svg" alt="instagram"><img src="./img/social-facebook.svg" alt="facebok"><img src="./img/social-whatsapp.svg" alt="whatsapp"> -->
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
}
.formulario-de-contacto{
    width: 70rem;
    margin: 10vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contacto-text{
    width: 100%;
}
.contacto-text > *{
    margin-bottom: 3vh;
}
.formulario-de-contacto h2{
    font-size: 2.5rem;
}
.formulario-de-contacto span{
    font-size: 1.2rem;
    display: block;
}
.contacto-row{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.formulario-de-contacto form{
    display: flex;
    width: 30rem;
    flex-direction: column;
}
.formulario-de-contacto form > *{
    margin: 1vh 0;
}
.formulario-de-contacto form > input[type="text"], .formulario-de-contacto form > input[type="email"] , .form-column input{
    padding: 1vh 0;
    border: none;
    border-bottom: 2px #000 solid;
    outline: 0px solid transparent;
}
.contacto-row input[type="text"], textarea,input[type="email"]{
 font-size: 1rem;
}
textarea.textArea{
    outline: 0px solid transparent;
    border: none;
    border-bottom: 2px #000 solid;
    padding-bottom: 5vh;
}
.form-row{
    display: flex;
    justify-content: space-between;
}
.form-column{
    display: flex;
    flex-direction: column;
}
.formulario-de-contacto label{
    font-weight: 500;
    color: #000;
    font-size: 1.1rem;
}
.contacto-row input[type="submit"]{
    margin-top: 3vh;
    width: 8rem;
    font-weight: 500;
    padding: .15rem 0;
    color: #fff;
    font-family: "Murecho", sans-serif;
    background: #000;
    font-size: 1.2rem;
    border-radius: 16px;
    border: none;
}
.contacto-row input[type="submit"]:hover{
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0,95),rgba(0, 0, 0,0.75),rgba(0, 0, 0, 0.80));
}
.linea{
    transform: translateY(-5rem);
    height: 30rem;
    border: #000 solid 1px;
}
.side-form > *{
    margin: 4vh 0;
}
.title{
    font-weight: 600;
}
.call-us >*, .social-media >*{
    margin-bottom: 0.5vh;
}
.call-us :last-child{
    color: #0027A8;
    font-weight: 500;
}
.call-us :last-child:hover{
    text-decoration: underline;
    cursor: pointer;
}
.social-media figure img{
    width: 2rem;
}
.social-media figure{
    width: 100%;
    display: flex;
    margin: 1vh 0;
    gap: 1vw;
}
.social-media figure img:hover{
    cursor: pointer;
    width: 3rem;
}

@media screen and (max-width:800px){
    .formulario-de-contacto{
        width: 90vw;        
    }
    .formulario-de-contacto h2{
        font-size: 1.6rem;
    }
    .formulario-de-contacto span{
        font-size: .95rem;
    }
    .contacto-row{
        flex-direction: column;
    }
    .formulario-de-contacto form{
        width: 100%;
    }
    .form-row{
        flex-direction: column;
        gap: 3vh;
    }
    .contacto-row input[type="button"]{
        margin: 3vh auto;
    }
    .linea{
        display: none;
    }
    .side-form{
        text-align: center;
    }
    .side-form span{
        font-size: 1.05rem;
    }
    .call-us >*, .social-media >*{
        margin-bottom: 1.5vh;
    }
    .social-media{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .social-media figure{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 3vw;
    }
    .social-media figure img{
        width: 2rem;
    }
}
</style>