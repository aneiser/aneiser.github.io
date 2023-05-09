<script>
export default {
    props: ['project']
}
</script>

<template>
    <v-hover v-slot="{ isHovering, props }">
        <RouterLink :to="`/${project.link}`" class="mx-8" style="text-decoration: none;">
            <article class="card d-flex flex-column transition-swing"
                    v-bind="props"
                    :class="`elevation-${isHovering ? 8 : 1} ${project.theme}`"
                    :style="{ 'background-image': `url(${project.img})` }"
                    >
                <div class="card__header py-4 px-6">
                    <span class="card__header-role">{{ project.role }}</span>
                    <span class="card__header-date">{{ project.date }}</span>
                </div>
                <div class="card__body flex-grow-1 py-4 px-6">
                    <h1 class="text-h3 card__body-title">{{ project.title }}</h1>
                </div>
                <div class="card__footer py-4 px-6">
                    <div class="card__footer-button py-1 px-3">{{ project.status }}</div>
                </div>
            </article>
        </RouterLink>
    </v-hover>
</template>

<style scoped>
/* Block */
.card {
    background-color: #ffffff;
    min-width: 370px;
    min-height: 600px;
    border-radius: 12px;
    color: #dd0000;
    text-shadow: 1px 1px 3px #00000033;
}
.card__body-title {
    font-size: 2.7rem !important;
}
.ubisoft {
    background-size: cover;
    background-position-x: -410px;
    color: white;
    text-shadow: 1px 1px 3px #00000033,
                 2px 2px 6px #00000080;
}
.ubisoft .card__header {
    border-bottom: 1px solid #fff;
}
.smartcontact {
    background-position: -8px 300px;
    background-size: 102%;
}

.insignum {
    background-position: center;
    background-size: cover;
    color: white;
    text-shadow: 1px 1px 3px #00000033,
                 2px 2px 6px #00000080;
}

.insignum .card__header {
    border-bottom: 1px solid #fff;
}

.hera {
    background-image: linear-gradient(rgba(255, 255, 255, 0.9) 0%,
                                      rgba(255, 255, 255, 0.5) 45%,
                                      rgba(255, 255, 255, 0.0) 50%,
                                      rgba(255, 255, 255, 0.0) 80%,
                                      rgba(255, 255, 255, 0.5) 90%,
                                      rgba(255, 255, 255, 0.9) 100%);
    background-size: cover;
    background-position: center;
}

.el-mundo {
    background-size: 145%;
    background-position: bottom;
    background-color: #f2f3f5;
}

/* Elements */
.card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dd0000;
}

.card__footer {
  display: flex;
  justify-content: right;
}

.card__footer-button {
    color: #dd0000;
    background-color: #fff;
    border: 1px solid #dd0000;
    border-radius: 2rem;
    transition: background-color 0.3s ease;
}

</style>