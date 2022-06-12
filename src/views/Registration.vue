<template>
    <div class="page-registration">
        <div class="row justify-content-md-center">
            <div class="col col-lg-4 center">
                <h1 class="text-center mt-3 ">Registration</h1>
                <form @submit.prevent="submitForm">
                    <div class="form-group mt-3">
                        <label for="emailInput">Enter your e-mail address:</label>
                        <input type="email" class="form-control" id="emailInput" placeholder="E-Mail" v-model="username">
                    </div>
                    <div class="form-group mt-3">
                        <label for="passwordInput">Enter your password:</label>
                        <input type="password" class="form-control" id="passwordInput" placeholder="Password" v-model="password">
                    </div>
                    <div class="alert alert-danger mt-3" v-if="errors.length">
                        <p
                            v-for="error in errors"
                            :key="error.id"
                        >
                            {{error}}
                        </p>
                    </div>
                    <button type="submit" class="btn btn-success mt-3">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SignUp',
    data () {
        return {
            username: '',
            password: '',
            errors: []
        }
    },
    methods: {
        submitForm(e) {
            const formData = {
                username: this.username,
                password: this.password
            }

            axios
                .post("api/v1/users/", formData)
                .then(response => {
                    console.log(response)

                    this.$router.push('/log-in')
                })
                .catch(error => {
                if (error.response) {
                    for (const property in error.response.data) {
                        this.errors.push(`${property}: ${error.response.data[property]}`)

                        console.log(JSON.stringify(error.response.data))
                    }
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