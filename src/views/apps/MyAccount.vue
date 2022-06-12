<template>
    <div class="page-dashboard">
        <section class="d-flex justify-content-center mt-3">
            <div class="col-12">
                <div class="p-1 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5">
                        <h1 class="text-center display-6 fw-bold">Account Settings</h1>
                        <p class="text-center fs-4">Manage your account settings</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="col mb-2">
            <div class="d-grid">
                <button @click="logout()" class="btn btn-danger" type="button">Log Out</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MyAccount',
    methods: {
        logout() {
            axios
                .post("api/v1/token/logout")
                .then(response => {
                    axios.defaults.headers.common["Authorization"] = ""
                    localStorage.removeItem("token")
                    this.$store.commit('removeToken')
                    this.$router.push('/')
                })
                .catch(error => {
                if (error.response) {
                    console.log(JSON.stringify(error.response.data))
                } else if (error.message) {
                    console.log(JSON.stringify(error))
                } else {
                    console.log(JSON.stringify(error))
                }
                })
        }
    }
}
</script>
