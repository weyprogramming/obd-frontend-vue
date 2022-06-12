<template>
    <div class="page-dashboard">
        <section class="d-flex justify-content-center mt-3">
            <div class="col-12">
                <div class="p-1 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5">
                    <h1 class="text-center display-6 fw-bold">Dashboard</h1>
                    <p class="text-center fs-4">Recent actions on the platform</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="col">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Measurement By</th>
                        <th scope="col">Date</th>
                        <th scope="col">Measurement Points</th>
                        <th scope="col" style="width:20%">Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="measurement in measurements" :key="measurement.id">
                        <th scope="row">{{measurement.id}}</th>
                        <td>{{measurement.account.first_name}} {{measurement.account.last_name}}</td>
                        <td>{{measurement.createdAt}}</td>
                        <td>{{measurement.measurement_points.length}}</td>
                        <td>
                            <div class="col">
                                <div class="d-grid">
                                    <router-link :to="{ name: 'Measurement', params: {id: measurement.id}}" class="btn btn-secondary" type="button">Details</router-link>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Dashboard',
    data() {
        return {
            measurements: {}
        }
    },
    async beforeMount() {
        await this.getMeasurements()
    },
    methods: {
        getMeasurements() {
            axios
                .get("api/v1/measurements/")
                .then(response => {
                    this.measurements = response.data
                })
                .catch(error => {
                    console.log(JSON.stringify(error))
                })
        }
    }
}
</script>