<template>
    <div>  
        <md-card-header>
            <md-icon class="md-primary">bookmark</md-icon>
            <span class="md-title">{{title}}</span>
            <md-divider class="about-inset"></md-divider>
        </md-card-header>
        
        <md-card-content class="about-inset">
            <h4 v-html="about"></h4>
        </md-card-content>
    </div>
</template>
<script>
    export default {
        props:['about'],
        data(){
            return {
                title:'About'
            }
        }
    }
</script>
<style lang="scss">
    .about-inset {
        margin-left: 25px;
    }
</style>