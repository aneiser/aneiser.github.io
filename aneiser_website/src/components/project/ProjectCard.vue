<script>
export default {
    props: ['project']
}
</script>

<template>
    <v-hover v-slot="{ isHovering, props }">
        <RouterLink v-if="!['projects/insignum'].includes(project.link)" :to="`/${project.link}`" class="px-8" style="text-decoration: none;">
            <article class="card d-flex flex-column transition-swing" v-bind="props"
                    :class="`elevation-${isHovering ? 8 : 1} ${project.theme}`"
                    :style="{ 'background-image': `url(${project.img})` }">
                <div class="card__header pa-4">
                    <span class="card__header-role">{{ project.role }}</span>
                    <span class="card__header-industry">{{ project.industry }}</span>
                </div>
                <div class="card__body flex-grow-1 pa-4">
                    <h1 class="text-h3 card__body-title">{{ project.title }}</h1>
                </div>
                <div v-if="project.status" class="card__footer pa-4">
                    <div class="card__footer-button py-1 px-3">{{ project.status }}</div>
                </div>
            </article>
        </RouterLink>

        <!-- Render no-link version for all other cases -->
        <div v-else class="mx-8" style="text-decoration: none; cursor: not-allowed;">
            <article class="card d-flex flex-column transition-swing" v-bind="props"
                :class="`elevation-${isHovering ? 8 : 1} ${project.theme}`"
                :style="{ 'background-image': `url(${project.img})` }">
                <div class="card__header pa-4">
                    <span class="card__header-role">{{ project.role }}</span>
                    <span class="card__header-industry">{{ project.industry }}</span>
                </div>
                <div class="card__body flex-grow-1 pa-4">
                    <h1 class="text-h3 card__body-title">{{ project.title }}</h1>
                </div>
                <div class="card__footer pa-4">
                    <div class="card__footer-button py-1 px-3">{{ project.status }}</div>
                </div>
            </article>
        </div>
    </v-hover>
</template>

<style scoped>
/* Block */
.card {
    background-color: var(--color-white);
    min-width: 330px;
    width: 330px;
    min-height: 485px;
    border-radius: 12px;
    color: var(--color-red);
    text-shadow: 1px 1px 3px var(--text-shadow-soft);
}
.card__body-title {
    font-size: 2.2rem !important;
}
.ubisoft {
    background-size: cover;
    background-position-x: -300px;
    color: var(--color-white);
    text-shadow: 1px 1px 3px var(--text-shadow-soft),
                 2px 2px 6px var(--text-shadow-hard);
}
.ubisoft .card__header {
    border-bottom: 1px solid var(--color-white);
}
.smartcontact {
    background-position-y: 230px;
    background-size: contain;
}

.insignum {
    background-position: center;
    background-size: cover;
    color: var(--color-white);
    text-shadow: 1px 1px 3px var(--text-shadow-soft),
                 2px 2px 6px var(--text-shadow-hard);
}

.insignum .card__header {
    border-bottom: 1px solid var(--color-white);
}

.hera {
    background-size: cover;
    background-position: center;
    overflow: hidden;
}

.hera .card__header{
    background-color: rgb(255 255 255 / 80%);
}

.hera .card__body{
    background-image: linear-gradient(rgba(255, 255, 255, 0.7) 40%,
                                      rgba(255, 255, 255, 0.0) 100%);
}

.el-mundo {
    background-size: 135%;
    background-position: center 190px;
    background-color: #f2f3f5;
}

/* Elements */
.card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-red);
}

.card__footer {
  display: flex;
  justify-content: right;
}

.card__footer-button {
    color: var(--color-red);
    background-color: var(--color-white);
    border: 1px solid var(--color-red);
    border-radius: 2rem;
    transition: background-color 0.3s ease;
    text-shadow: none;
}

</style>