import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isModalShowed: false,
        isPostShowed: false,
        products: [
            {id: 0, title: 'Pereira Creative Agency', subtitle: 'Branding Design', date: '2015-02-28', likes: 324,
                info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
                tags: ['Mobile App', 'UI/UX design'], roles: ['Project Designer', 'Lead Designer', 'Markerting Head'],
                images: ['portfolio1-1.png', 'gallery-item5.png', 'gallery-item8.png', 'blog-image3.png']},

            {id: 1, title: 'Pereira Creative Agency', subtitle: 'Branding Design', date: '2015-02-28', likes: 727,
                info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.',
                tags: ['Mobile App', 'UI/UX design'], roles: ['Project Designer', 'Lead Designer', 'Markerting Head'],
                images: ['portfolio2-1.png', 'gallery-item4.png', 'blog-image1.png', 'gallery-item7.png']}
        ],
        socials: [
            {id: 1, name: 'Facebook', html: 'fab fa-facebook', socialLink: '#', shareLink: '#'},
            {id: 2, name: 'Google', html: 'fab fa-google-plus', socialLink: '#', shareLink: '#'},
            {id: 3, name: 'Twitter', html: 'fab fa-twitter', socialLink: '#', shareLink: '#'},
            {id: 4, name: 'LinkedIn', html: 'fab fa-linkedin', socialLink: '#', shareLink: '#'},
            {id: 5, name: 'VK', html: 'fab fa-vk', socialLink: '#', shareLink: '#'},
            {id: 6, name: 'Pinterest', html: 'fab fa-pinterest', socialLink: '#', shareLink: '#'},
            {id: 7, name: 'Instagram', html: 'fab fa-instagram', socialLink: '#', shareLink: '#'}
        ]
    },
    getters: {},
    actions: {},
    mutations: {
        showModal(state) {
            state.isModalShowed = true;
        },
        hideModal(state) {
            state.isModalShowed = false;
        },
        showPost(state) {
            state.isPostShowed = true;
        },
        hidePost(state) {
            state.isPostShowed = false;
        }
    }
})