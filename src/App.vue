// @author Alejandro Valdes
// See README's bottom section for more info.

<template v-if="agenda.length">
  <div class="section">
    <!-- calendar Modal -->
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
          <div class="modal-body"></div>
          <FullCalendar id="calendar" v-if="show" :options="calendarOptions" />
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

    <!-- editing modal -->
    <div
      class="modal fade p-5"
      id="editingModal"
      tabindex="-1"
      aria-labelledby="editingModalLabel"
      aria-hidden="true"
    >
      <div
        class="p-5 m-auto modal-dialog modal-fullscreen modal-dialog-centered"
        style="max-width: 95% !important; max-height: 90% !important"
      >
        >
        <div class="modal-content">
          <div class="modal-body">
            <div class="">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td scope="col">
                      <input
                        :value="temp.contact_info.first_name"
                        class="w60 text-center"
                      />
                    </td>
                    <td scope="col">
                      <input
                        :value="temp.contact_info.last_name"
                        class="w60 text-center"
                      />
                    </td>
                    <td scope="col" class="">
                      <!-- add date -->
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        @click="showCalendar"
                      >
                        +
                      </button>
                      <input
                        :value="temp.date"
                        class="w60 text-center"
                        readonly
                      />
                    </td>
                    <td scope="col">
                      <!-- add hour -->
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="getHour"
                      >
                        +
                      </button>
                      <input
                        :value="temp.start_time"
                        class="w60 text-center"
                        readonly
                      />
                    </td>
                    <td scope="col">
                      <input
                        :value="temp.contact_info.phone_number"
                        class="w60 text-center"
                      />
                    </td>
                    <td scope="col">
                      <input
                        :value="temp.contact_info.email"
                        class="w60 text-center"
                      />
                    </td>
                    <td scope="col">
                      <button
                        id="addBtn"
                        type="button"
                        @click="confirmEdit"
                        class="btn btn-success"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <FullCalendar
              id="calendar"
              v-if="show"
              :options="calendarOptions"
            />
          </div>
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
    <button type="button" @click="scrollAdd" class="btn btn-success d-flex">
      New Entry
    </button>

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Date</th>
            <th scope="col">Start Time</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- repeat -->
          <tr v-for="(item, index) in agenda" :key="index">
            <th scope="row">1</th>
            <td scope="col">{{ item.contact_info.first_name }}</td>
            <td scope="col">{{ item.contact_info.last_name }}</td>
            <td scope="col">{{ item.date }}</td>
            <td scope="col">{{ item.start_time }}</td>
            <td scope="col">{{ item.contact_info.phone_number }}</td>
            <td scope="col">{{ item.contact_info.email }}</td>
            <td scope="col">
              <div class="d-flex">
                <button
                  @click="startEdit(item)"
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#editingModal"
                >
                  Edit
                </button>
                <button
                  @click="confirmDel(item.id)"
                  type="button"
                  class="btn btn-danger mx-1"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <!-- end repeat -->
          <tr>
            <th scope="row"></th>
            <td scope="col">
              <input v-model="form.first_name" class="w60 text-center" />
            </td>
            <td scope="col">
              <input v-model="form.last_name" class="w60 text-center" />
            </td>
            <td scope="col" class="">
              <!-- add date -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="showCalendar"
              >
                +
              </button>
              <input
                :placeholder="this.form.date"
                class="w60 text-center"
                readonly
              />
            </td>
            <td scope="col">
              <!-- add hour -->
              <button type="button" class="btn btn-primary" @click="getHour">
                +
              </button>
              <input
                :placeholder="this.form.start_time"
                class="w60 text-center"
                readonly
              />
            </td>
            <td scope="col">
              <input v-model="form.phone_number" class="w60 text-center" />
            </td>
            <td scope="col">
              <input v-model="form.email" class="w60 text-center" />
            </td>
            <td scope="col">
              <button
                id="addBtn"
                type="button"
                @click="confirmCreate"
                class="btn btn-success"
              >
                Create
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
import * as x from "./service";

export default {
  name: "App",
  components: { FullCalendar },
  data() {
    return {
      agenda: [],
      temp: {
        id: null,
        date: null,
        start_time: null,
        contact_info: {
          first_name: null,
          last_name: null,
          phone_number: null,
          email: null,
        },
      },
      show: false,
      form: {
        date: null,
        start_time: null,
        first_name: null,
        last_name: null,
        phone_number: null,
        email: null,
      },
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
  beforeMount() {
    this._getAll();
  },
  methods: {
    //CRUD START
    async _create() {
      try {
        const res = await x.create(this.form);
        this._getAll();
        return res;
      } catch (error) {
        return null;
      }
    },
    async _get(num) {
      try {
        const res = await x.get(num);
        return res.data;
      } catch (error) {
        return null;
      }
    },
    async _getAll() {
      try {
        const res = await x.getAll();
        if (!res) throw "error";
        this.agenda = res.data;
      } catch (error) {
        return null;
      }
    },
    async _update(id) {
      try {
        const res = await x.update(id);
        this._getAll();
        return res;
      } catch (error) {
        return null;
      }
    },
    async _destroy(id) {
      try {
        const res = await x.destroy(id);
        this._getAll();
        return res;
      } catch (error) {
        return null;
      }
    },
    //CRUD END
    showCalendar() {
      if (this.show) this.show = !this.show;
      setTimeout(() => {
        this.show = true;
      }, 500);
    },
    getHour() {
      Swal.fire({
        title: "Choose an hour",
        input: "radio",
        inputOptions: this.availableHrs,
        inputValidator: (value) => {
          if (!value && !this.form.start_time) {
            return "Please choose an hour";
          }
          this.form.start_time = this.availableHrs[value];
        },
      });
    },
    handleDateClick: function (arg) {
      this.form.date = arg.dateStr;
      document.getElementById("closeModal").click();
      !this.form.start_time && this.getHour();
    },
    scrollAdd() {
      document.getElementById("addBtn").scrollIntoView();
    },
    startEdit(item) {
      this.temp = item;
      console.log(this.temp);
      this.showCalendar();
    },
    confirmEdit(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            didOpen: async () => {
              Swal.showLoading();
              const op = await this._update(id);
              if (!op) return Swal.fire("Operation failed.", "", "error");
              Swal.fire("Successfully edited.", "", "success");
            },
          });
        }
      });
    },
    confirmCreate() {
      for (var key in this.form) {
        if (this.form[key] == null || this.form[key] == "")
          return Swal.fire({
            icon: "error",
            title: "Please fill in all fields.",
          });
      }
      Swal.fire({
        title: "Add new entry?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            didOpen: async () => {
              Swal.showLoading();
              const op = await this._create(this.form);
              if (!op) return Swal.fire("Operation failed.", "", "error");
              Swal.fire("Successfully added.", "", "success");
            },
          });
        }
      });
    },
    confirmDel(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            didOpen: async () => {
              Swal.showLoading();
              const op = await this._destroy(id);
              if (!op) return Swal.fire("Operation failed.", "", "error");
              Swal.fire("Successfully deleted.", "", "success");
            },
          });
        }
      });
    },
  },
};
</script>

<style>
#calendar {
  cursor: pointer !important;
}
.w60 {
  max-width: 60% !important;
}
.swal2-radio {
  display: grid !important;
}
label {
  cursor: pointer !important;
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
