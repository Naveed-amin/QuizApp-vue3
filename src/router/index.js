import { createRouter, createWebHashHistory } from "vue-router";
// import { Card } from "./components/Card.vue"
// import Card from '../views/QuizesView.vue';
import QuizesView from '../assets/views/QuizesView.vue';
import QuizView from '../assets/views/QuizView.vue';




const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "quizes",
            component: QuizesView
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: QuizView
        }
    ]
});

export default router;