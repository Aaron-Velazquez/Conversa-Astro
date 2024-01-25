<script setup>

    import {ref} from 'vue'
    import Basic from "../config/basicPlan.json";
    import Med from "../config/MedPlan.json";
    import Avan from "../config/AvanPlan.json";
    
    
    const plans = ref([]);
    plans.value = Basic;

    const planOn = ref('');

    const planPicker = (current)=>{
       if (current == 'basic') plans.value = Basic;
       if (current == 'Med') plans.value = Med;
       if (current == 'Av') plans.value = Avan;
    }

</script>

<template>
<section class="Plantillas-container">
    <div class="choose">
        <h3>Descubre cual es para vos</h3>
        <div class="prices">
            <span @click="planPicker(planOn= 'basic')">300 mil</span>
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
        <!-- <figure><img src="../../public/img/landings/landing-300-1.svg" alt="Página web"></figure>
        <figure><img src="../../public/img/landings/landing-300-1.svg" alt="Página web"></figure>
        <figure><img src="../../public/img/landings/landing-300-1.svg" alt="Página web"></figure>
        <figure><img src="../../public/img/landings/landing-300-1.svg" alt="Página web"></figure>
        <figure><img src="../../public/img/landings/landing-300-1.svg" alt="Página web"></figure> -->
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
        width: 93rem;
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
        margin-top: 7vh;
        font-size: 1.6rem;
        display: flex;
        justify-content: center;
        gap: 20rem;
    }
    .prices span{
        margin-bottom: 10vh;
        border-bottom:#1C1C1C solid 2px; 
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
    .presentacion{
        width: 70rem;
        margin: 5vh auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        justify-items: center;
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
