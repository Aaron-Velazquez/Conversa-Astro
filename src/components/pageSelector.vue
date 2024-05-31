<script setup>

    import {ref} from 'vue'
    import Basic from "../config/basicPlan.json";
    import BasicImg from "../config/basicImg.json";
    import Med from "../config/MedPlan.json";
    import MedImg from "../config/MedImg.json";
    import Avan from "../config/AvanPlan.json";
    import AvanImg from "../config/AvImg.json";
    
    
    const plans = ref([]);
    const images = ref([]);
    plans.value = Basic;
    images.value = BasicImg;
    const planOn = ref('');

    const cssSelected = (selected) =>{
        const items = document.querySelectorAll(".prices span");
        let sw = 0, c = 0;
        items.forEach((item)=>{
            if ((selected == 'basic' && c==0 || selected == 'Med' && c==1 || selected == 'Av' && c==2) && sw==0){
                items[c].classList.add("selected");
                sw=1;
            }else{
                item.classList.remove("selected")
            }
            c=c+1;
        })
    }

    const show = (image) => {
        const display = document.querySelector(".detalles");
        display.classList.remove("none");
        display.innerHTML = `
        <img src="./img/equis.svg" class="salir" alt="X">
        <figure class="webImg">
            <img src="${image}" alt="Página web">
            </figure>` 
        const salir = document.querySelector(".salir");
        salir.addEventListener("click", ()=>{
            display.classList.add("none");
        })
    }

    const planPicker = (current)=>{
        cssSelected(current)
        if (current == 'basic') {
            images.value = BasicImg;
            plans.value = Basic;
       }
       if (current == 'Med') {
        images.value = MedImg;
        plans.value = Med;
    }
       if (current == 'Av'){
        images.value = AvanImg;
        plans.value = Avan;
       } 
    }

</script>

<template>
<section class="Plantillas-container">
    <div class="choose">
        <h3>Algunas de nuestras plantillas</h3>
        <div class="prices">
            <span class="selected" @click="planPicker(planOn= 'basic')">330.000 Gs</span>
            <span @click="planPicker(planOn= 'Med')">550.000 Gs</span>
            <span @click="planPicker(planOn= 'Av')">1.100.000 Gs</span>
        </div>
        <div class="linea-precios"></div>
    </div>
    <div class="presentacion">
        <div class="pres-text" v-for="plan in plans">
            <h4>{{plan.title}}</h4>
            <span>{{plan.subtitle}}</span>
            <ul>
                <li>{{plan.caracteristica1}}</li>
                <li>{{plan.caracteristica2}}</li>
                <li>{{plan.caracteristica3}}</li>
            </ul>
        </div>
            <div class="plantillas-img" v-for="imgs in images">
                <figure>
                    <img :src="imgs.image" alt="Página web" @click="show(imgs.image)">
                </figure>
            </div>
    </div>
</section>
<div class="detalles none">
</div>
</template>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style:disc;
    }
    .plantillas-container{
        border: #000 solid 1px;
        width: 90vw;
        margin: auto;
        color: #1C1C1C;
    }
    .choose{
        text-align: center;
    }
    .choose h3{
        font-size: 2.6rem;
    }
    .prices{
        margin: 7vh auto .5vh auto;
        font-size: 1.6rem;
        display: flex; 
        width: 70rem;
        justify-content: space-between;
    }
    .prices span{
        width: 100%;
    }
    .selected{
        border-bottom:#1C1C1C solid 3px;
        font-size: 1.8rem;
    }
    .prices span:hover{
        cursor: pointer;
    }
    .linea-precios{
        width: 90vw;
        margin: auto; 
        border: #1C1C1C solid 1px;
        height: 1px;
    }
    .plantillas-img figure:hover{
        width: 33rem;
        height: 27rem;
        cursor: pointer;
        box-shadow: 2px 2px 2px #00000086;
    }
    .plantillas-img figure{
        border-radius: 16px;
        width: 30rem;
        height: 24rem;
    }
    .plantillas-img figure img{
        border-radius: 16px;
        object-position: top;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .presentacion{
        width: 70rem;
        margin: 5vh auto;
        display: grid;
        grid-template-columns: repeat(2, 35rem);
        grid-row-gap: 2rem;
        justify-items: center;
        align-items: center;
    }
    .pres-text{
        margin-top: -10rem;
    }
    .pres-text h4{
        color: #1C1C1C;
        font-size: 2rem;
        font-weight: 500;
    }
    .pres-text>*{
        margin: 2rem 0;
    }
    .pres-text ul{
        margin-left: 2rem;
    }
    .pres-text ul > *{
        margin: 1vh 0;
    }
    .detalles{
        background-color: #00000086;
        text-align: center;
        position: fixed;
        top:0;
        width: 100%;
        height: 125vh;
        z-index: 2000;
    }
    .webImg{
        margin: 2vh auto;
        width: 50rem;
        height: 90vh;
        overflow: auto;
    }
    .webImg img{
        width: 100%;
    }
    .salir{
        margin-top: 4vh;
        transform: translateX(22.5rem);
        width: 1rem;
        position: absolute;
    }
    .salir:hover{
        cursor: pointer;
    }
    .salir img{
        display: block;
        width: 100%;
    }
    .none{
        display: none;
    }
    @media screen and (max-width:800px){
    .plantillas-container{
        width: 95vw;
    }
    .choose h3{
        font-size: 1.6rem;
    }
    .prices{
        width: 90vw;
        font-size: 1rem;
    }
    .linea-precios{
        width: 95vw;
    }
    .presentacion{
        width: 90vw;
        grid-template-columns: 100%;
        grid-auto-rows: 25rem;
    }
    .pres-text h4{
        font-size: 1.8rem;
    }
    .plantillas-img figure{
        width: 90vw;
    }
    .pres-text{
        margin: 0;
    }
    .webImg{
        margin: 2vh auto;
        width: 95vw;
        overflow: auto;
    }
    .salir{
        margin-top: 2vh;
        transform: translateX(0);
        right: 1rem;
        width: 1rem;
    }
    .plantillas-img figure:hover{
        border-radius: 16px;
        width: auto;
        height: auto;
    }
    }
</style>
