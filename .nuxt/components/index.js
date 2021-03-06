export { default as Logo } from '../../components/Logo.vue'
export { default as Header } from '../../components/Header/Header.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header/Header.vue' /* webpackChunkName: "components/Header/Header" */).then(c => c.default || c)
