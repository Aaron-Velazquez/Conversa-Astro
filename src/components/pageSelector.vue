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
        <h3>Descubre cual es para vos</h3>
        <div class="prices">
            <span class="selected" @click="planPicker(planOn= 'basic')">300 mil</span>
            <span @click="planPicker(planOn= 'Med')">500 mil</span>
            <span @click="planPicker(planOn= 'Av')">1 Millón</span>
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
                    <img :src="imgs.image" alt="Página web">
                </figure>
            </div>
    </div>
</section>

</template>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style:disc;
    }
    .plantillas-container{
        width: 80rem;
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
        width: 80rem;
        margin: auto; 
        border: #1C1C1C solid 1px;
        height: 1px;
    }
    .plantillas-img figure:hover{
        width: 105%;
        cursor: pointer;
        border-radius: 16px;
    }
    .plantillas-img figure img{
        width: 100%;
    }
    .presentacion{
        width: 70rem;
        margin: 5vh auto;
        display: grid;
        grid-template-columns: repeat(2, 35rem);
        grid-template-rows: repeat(8, 180px);
        grid-row-gap: 2rem;
        justify-items: center;
    }
    .pres-text{
        grid-area: 1 / 1 / 3 / 1;
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
</style>
