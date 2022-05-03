// @author Alejandro Valdes
// See README's bottom section for more info.

<template>
  <div class="section">
    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
      class="modal fade p-5"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="p-5 m-auto modal-dialog modal-fullscreen modal-dialog-centered"
        style="max-width: 90% !important; max-height: 90% !important"
      >
        >
        <div class="modal-content px-5">
          <!-- <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div> -->
          <div class="modal-body"></div>
          <FullCalendar v-if="show" :options="calendarOptions" />
          <div class="modal-footer">
            <button
              id="closeModal"
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto" style="max-width: 90% !important">
    <button type="button" @click="_add" class="btn btn-success d-flex">
      Crear
    </button>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Email</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          <!-- repeat -->
          <tr>
            <th scope="row">1</th>
            <td scope="col">Nombre</td>
            <td scope="col">Apellido</td>
            <td scope="col">Fecha</td>
            <td scope="col">Hora</td>
            <td scope="col">Teléfono</td>
            <td scope="col">Email</td>
            <td scope="col">
              <div class="d-flex">
                <button type="button" class="btn btn-primary mx-1">
                  Editar
                </button>
                <button
                  @click="_delete"
                  type="button"
                  class="btn btn-danger mx-1"
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
          <!-- end repeat -->
          <tr>
            <th scope="row"></th>
            <td scope="col"><input class="w60 text-center" /></td>
            <td scope="col"><input class="w60 text-center" /></td>
            <td scope="col" class="">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="showCalendar"
              >
                +
              </button>
              <input class="w60 text-center" readonly />
            </td>
            <td scope="col">
              <button type="button" class="btn btn-primary" @click="getHour">
                +
              </button>
              <input class="w60 text-center" readonly />
            </td>
            <td scope="col"><input class="w60 text-center" /></td>
            <td scope="col"><input class="w60 text-center" /></td>
            <td scope="col">
              <button type="button" @click="_add" class="btn btn-success">
                Agregar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  name: "App",
  components: { FullCalendar },
  data() {
    return {
      show: false,
      date: String,
      hour: String,
      availableHrs: [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
      ],
      calendarOptions: {
        locale: "es",
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        dateClick: this.handleDateClick,
        // events: [
        //   { title: "event 1", date: "2022-05-01" },
        //   { title: "event 2", date: "2022-05-02" },
        // ],
        height: "100%",
        width: "100%",
      },
    };
  },
  methods: {
    showCalendar() {
      setTimeout(() => {
        this.show = true;
      }, 500);
    },
    getHour() {
      Swal.fire({
        title: "Elige una hora",
        input: "radio",
        inputOptions: this.availableHrs,
        inputValidator: (value) => {
          if (!value) {
            return "You need to choose something!";
          }
          console.log(this.availableHrs[value]);
        },
      });
    },
    handleDateClick: function (arg) {
      this.date = arg.dateStr; // no borrar
      console.log("this.date", this.date);
      document.getElementById("closeModal").click();
      this.getHour();
    },
    _add() {
      Swal.fire({
        title: "Multiple inputs",
        html:
          '<input placeholder="asd" id="swal-input1" class="swal2-input">' +
          '<input id="swal-input2" class="swal2-input">' +
          '<input id="swal-input3" class="swal2-input">' +
          '<input id="swal-input4" class="swal2-input">' +
          '<input id="swal-input5" class="swal2-input">' +
          '<input id="swal-input6" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value,
            document.getElementById("swal-input4").value,
            document.getElementById("swal-input5").value,
            document.getElementById("swal-input6").value,
          ];
        },
      });
    },
    _delete() {
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
    },
  },
};
</script>

<style>
.w60 {
  max-width: 60% !important;
}
.swal2-radio {
  display: grid !important;
}
label {
  margin-bottom: 10px !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
