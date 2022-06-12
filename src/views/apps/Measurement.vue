<template>
    <div class="page-measurement">
        <section class="d-flex justify-content-center mt-3">
            <div class="col-12">
                <div class="p-1 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5">
                    <h1 class="text-center display-6 fw-bold">Measurement Details</h1>
                    <p class="text-center fs-4">Measurement {{measurement.id}} by {{measurement.account.first_name}} {{measurement.account.last_name}}</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="card">
            <div class="card-header fs-4 text-center">Quick Overview</div>
            <div class="card-body">
                <table class="table table-bordered table-striped">
                    <tbody>
                        <tr>
                            <td>Id</td>
                            <td class="text-end" colspan="2">{{measurement.id}}</td>
                        </tr>
                        <tr>
                            <td>Measured By</td>
                            <td class="text-end" colspan="2"> {{measurement.account.first_name}} {{measurement.account.last_name}}</td>
                        </tr>
                        <tr>
                            <td>Created At</td>
                            <td class="text-end" colspan="2"> {{measurement.created_at}}</td>
                        </tr>
                        <tr>
                            <td>Measurement Points</td>
                            <td class="text-end" colspan="2"> {{measurement.measurement_points.length}}</td>
                        </tr>
                        <tr class="table-success">
                            <td rowspan="8" class="align-middle">Car</td>
                            <td class="text-start">Manufacturer</td>
                            <td class="text-end"> {{measurement.account.car.manufacturer}} {{measurement.account.car.model_name}}</td>
                        </tr>
                        <tr>
                            <td>Construction Year</td>
                            <td class="text-end"> {{measurement.account.car.construction_year}}</td>
                        </tr>
                        <tr class="table-success">
                            <td>Fuel Type</td>
                            <td class="text-end"> {{measurement.account.car.fuel_type}}</td>
                        </tr>
                        <tr>
                            <td>Mass</td>
                            <td class="text-end"> {{measurement.account.car.mass_kg}} kg</td>
                        </tr>
                        <tr class="table-success">
                            <td>Engine Displacement</td>
                            <td class="text-end"> {{measurement.account.car.engine_displacement_l}} l</td>
                        </tr>
                        <tr>
                            <td>Cylinder Amount</td>
                            <td class="text-end"> {{measurement.account.car.number_of_cylinders}}</td>
                        </tr>
                        <tr class="table-success">
                            <td>Milage</td>
                            <td class="text-end"> {{measurement.account.car.milage}} km</td>
                        </tr>
                        <tr>
                            <td>Power</td>
                            <td class="text-end"> {{measurement.account.car.power_ps}} PS</td>
                        </tr>
                        <tr class="table-secondary">
                            <td rowspan="4" class="align-middle">Driver</td>
                            <td>Name</td>
                            <td class="text-end"> {{measurement.account.first_name}} {{measurement.account.last_name}}</td>
                        </tr>
                        <tr>
                            <td>Date Of Birth</td>
                            <td class="text-end"> {{measurement.account.date_of_birth}}</td>
                        </tr>
                        <tr  class="table-secondary">
                            <td>Driving License Since</td>
                            <td class="text-end"> {{measurement.account.driving_license_since}}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td class="text-end"> {{measurement.account.gender}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Measurement',
    data () {
        return {
            measurement: {
                account: {
                    car: {}
                },
                measurement_points: []
            }
        }
    },
    async mounted() {
        await this.getMeasurement()
    },
    methods: {
        getMeasurement() {
            const measurementId = this.$route.params.id
            axios
                .get(`api/v1/measurements/${measurementId}`)
                .then(response => {
                    this.measurement = response.data
                })
                .catch(error => {
                    console.log(JSON.stringify(error))
                })
        }
    }
}
</script>