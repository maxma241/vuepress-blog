<template>
    <md-list class = "cus-md-list-header ">
<!--personal-->
        <md-toolbar>
            <md-list-item>
                <md-avatar class="md-large">
                    <img src="http://i.imgur.com/R9HV81f.png" alt="People">
                </md-avatar>
                <span>{{introduce.cname}}<br/>({{introduce.ename}})</span>    
            </md-list-item>
        </md-toolbar>
        <md-divider class="md-inset"></md-divider>

        <md-list-item>
            <md-icon class="md-primary">email</md-icon> <span>{{introduce.email}}</span>
        </md-list-item>

        <md-list-item>
        <md-icon mdSrc="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" />
            <span>
                <a :href="introduce.github" target="_blank">github.com/maxma241</a>
            </span>
        </md-list-item>

        <md-list-item>
        <md-icon class="md-primary">location_city</md-icon> <span>{{introduce.livedIn}}</span>
        </md-list-item>

        <md-list-item>
        <md-icon class="md-primary">phone</md-icon> <span>{{introduce.phone}}</span>

        <md-divider class="md-inset"></md-divider>
        </md-list-item>

<!--skill-->
        <slot></slot>
    </md-list>
</template>
<script>

    export default {
       props:['introduce']
    }
</script>

<style lang="scss">
.cus-md-list-header {
    padding-top: 0;
}
.md-list-item .md-list-item-container {
    min-height: 38px;
}
</style>