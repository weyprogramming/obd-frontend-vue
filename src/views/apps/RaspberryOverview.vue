<template>
    <div class="page-dashboard">
        <section class="d-flex justify-content-center mt-3">
            <div class="col-12">
                <div class="p-1 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5">
                        <h1 class="text-center display-6 fw-bold">Raspberry Setting Management</h1>
                        <p class="text-center fs-4">Configure your Raspberry Pis</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="row">
            <div class="col-lg-3">
                <div class="d-grid">
                    <router-link to="raspberries/create-new" class="btn btn-success">Set up new Raspberry Pi</router-link>
                </div>
            </div>
        </div>
        <div class="raspberry-overview">
            <div class="row">
                    <div class="col-lg-4 mt-3" v-for="(raspberry) in raspberries" :key="raspberry.id">
                        <div class="card">
                            <div class="card-header">{{raspberry.name}}</div>
                            <div class="card-body">
                                <table class="table table-success table-striped table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>Id</td>
                                            <td class="text-end">{{raspberry.id}}</td>
                                        </tr>
                                        <tr>
                                            <td>Created At</td>
                                            <td class="text-end">{{raspberry.created_at}}</td>
                                        </tr>
                                        <tr>
                                            <td>Updated At</td>
                                            <td class="text-end">{{raspberry.updated_at}}</td>
                                        </tr>
                                        <tr>
                                            <td>Raspberry Account</td>
                                            <td v-if="raspberry.raspberry_account.first_name && raspberry.raspberry_account.last_name" class="text-end">{{raspberry.raspberry_account.first_name}} {{raspberry.raspberry_account.last_name}}</td>
                                            <td v-else></td>
                                        </tr>
                                        <tr>
                                            <td>Used By</td>
                                            <td v-if="raspberry.used_by.first_name && raspberry.used_by.last_name" class="text-end">{{raspberry.used_by.first_name}} {{raspberry.used_by.last_name}}</td>
                                            <td v-else></td>
                                        </tr>
                                        <tr>
                                            <td>Settings</td>
                                            <td class="text-end">{{raspberry.settings}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "RaspberryOverview",
    data () {
        return {
            raspberries: [
            ]
        }
    },
    async beforeMount() {
        await this.getRaspberries()
    },
    methods: {
        getRaspberries() {
            axios
                .get("api/v1/raspberries")
                .then(response => {
                    this.raspberries = response.data

                    console.log(response.data)
                })
                .catch(error => {
                    console.log(JSON.stringify(error))
                })
        }
    }
}
</script>