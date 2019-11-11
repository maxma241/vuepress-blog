<template>
    <div>
        <md-card-header>
            <md-icon class="md-primary">build</md-icon>
            <span class="md-title">{{title}}</span>
            <md-divider class="about-inset"></md-divider>
        </md-card-header>

        <md-card-content class="about-inset">
            <div v-for="(item, index) in pro">
                <h3>
                    <span class="protitle">{{index+1}}. {{item.title}}</span>
                    <br />
                    <span class="meta">
                        <a v-if="item.url" :href="item.url" target="_blank">URL</a>
                        <a v-if="item.repository" :href="item.repository" target="_blank">GitHub</a>
                        [{{item.meta.join(', ')}}]
                    </span>
                </h3>
                <div class="pro-content">
                    <h4>{{item.description}}</h4>
                </div>
            </div>
        </md-card-content>
    </div>
</template>
<script>
    export default {
        props:['pro'],
        data() {
            return {
                title:'Projects'
            }
        }
    }
</script>
<style lang="scss">
.pro-content {
    margin-left: 20px;
}
.meta {
    margin-left: 20px;
    font-size: 0.8em;
}
.protitle {
    font-size: 1.2em;
}
</style>