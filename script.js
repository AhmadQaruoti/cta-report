async function loading_page() {
  // load logo
  var c_name;
  await fetch("json/name.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      c_name = data;
    })
    .catch((err) => {
      console.log(err);
    });
  document.getElementById("c_name").src = c_name.image;
  if (c_name.name === "Toyota"){
    document.getElementById("nav").classList ="navbar navbar-light bg-light px-5 border-3 border-bottom border-danger";
    document.getElementById("bg_image").style.backgroundImage="url('./images/hero2.jpg')";
  }
  else{
    document.getElementById("nav").classList ="navbar navbar-light bg-light px-5 border-4 border-bottom border-dark";
    document.getElementById("bg_image").style.backgroundImage="url('./images/hero.jpg')";
  }

  //load customer details
  var cu_data; //cu is customer
  await fetch("json/customer_details.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cu_data = data;
      document.getElementById("cu_name").innerText = cu_data.name;
      document.getElementById("cu_mobile").innerText = cu_data.mobile;
      document.getElementById("cu_car").innerText = cu_data.car;
      document.getElementById("cu_model").innerText = cu_data.model;
      document.getElementById("cu_year").innerText = cu_data.year;
      document.getElementById("cu_vin").innerText = cu_data.vin;
      document.getElementById("cu_plate").innerText = cu_data.plate;
      document.getElementById("cu_odo").innerText = cu_data.odo;
      document.getElementById("cu_card").innerText = cu_data.card;
      document.getElementById("cu_date").innerText = cu_data.date;
    })
    .catch((err) => {
      console.log(err);
    });

  //load under vehicle details
  var uv_data; //uv is under vehicle
  await fetch("json/under_vehicle.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      uv_data = data;
      let uv_table = document.getElementById("under_vehicle_table");
      uv_data.forEach((ele) => {
        if (ele.rate === "1")
          ele.rate = `<i class="fa-solid fa-circle-check fa-1x text-success"></i>`;
        else if (ele.rate === "2")
          ele.rate = `<i class="fa-solid fa-circle-exclamation fa-1x text-warning"></i>`;
        else
          ele.rate = `<i class="fa-solid fa-circle-xmark fa-1x text-danger"></i>`;
        uv_table.innerHTML += `<tr><td><i class="fa-solid fa-2x fa-camera" onclick="javascript:Open_Modal('/images/vehicle/under_vehicle/${ele.id}');"></i></td><td>${ele.note}</td><td>${ele.reason}</td><td>${ele.rate}</td><td>${ele.name}<br>${ele.name_ar}</td></tr>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });

  //load brakes, tires and bodies details
  var btb_data; //btb is break tires and bodies
  await fetch("json/brakes_tires_bodies.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      btb_data = data;
      let btb_table = document.getElementById("btb_vehicle_table");
      btb_data.forEach((ele,index) => {
        btb_table.innerHTML += `<tr class="table-active">
        <th scope="col">Image/صورة</th>
        <th scope="col">Note/ملاحظات</th>
        <th scope="col">Reason/الأسباب</th>
        <th scope="col">Rate/التقييم</th>
        <th scope="col">${ele.name}</th>
      </tr>`;
        ele["data"].forEach((element) => {
          if (element.rate === "1")
            element.rate = `<i class="fa-solid fa-circle-check fa-1x text-success"></i>`;
          else if (element.rate === "2")
            element.rate = `<i class="fa-solid fa-circle-exclamation fa-1x text-warning"></i>`;
          else
            element.rate = `<i class="fa-solid fa-circle-xmark fa-1x text-danger"></i>`;
          btb_table.innerHTML += `<tr><td><i class="fa-solid fa-2x fa-camera" onclick="javascript:Open_Modal('/images/vehicle/brake_tires_body/${btb_data[index]['for_image']}_${element.id}');"></i></td><td>${element.note}</td><td>${element.reason}</td><td>${element.rate}</td><td>${element.name}<br>${element.name_ar}</td></tr>`;
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });

  //load engine details
  var engine_data;
  await fetch("json/engine.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      engine_data = data;
      let engine_table = document.getElementById("engine_vehicle_table");
      engine_data.forEach((ele,index) => {
        engine_table.innerHTML += `<tr class="table-active">
        <th scope="col">Image/صورة</th>
        <th scope="col">Note/ملاحظات</th>
        <th scope="col">Reason/الأسباب</th>
        <th scope="col">Rate/التقييم</th>
        <th scope="col">${ele.name}</th>
      </tr>`;
        ele["data"].forEach((element) => {
          if (element.rate === "1")
            element.rate = `<i class="fa-solid fa-circle-check fa-1x text-success"></i>`;
          else if (element.rate === "2")
            element.rate = `<i class="fa-solid fa-circle-exclamation fa-1x text-warning"></i>`;
          else
            element.rate = `<i class="fa-solid fa-circle-xmark fa-1x text-danger"></i>`;
          engine_table.innerHTML += `<tr><td><i class="fa-solid fa-2x fa-camera" onclick="javascript:Open_Modal('/images/vehicle/engine/${engine_data[index]['for_image']}_${element.id}');"></i></td><td>${element.note}</td><td>${element.reason}</td><td>${element.rate}</td><td>${element.name}<br>${element.name_ar}</td></tr>`;
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });

  //load inside vehicle details
  var iv_data; //iv is inside vehicle
  await fetch("json/inside_vehicle.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      iv_data = data;
      let iv_table = document.getElementById("iv_vehicle_table");
      iv_data.forEach((ele,index) => {
        iv_table.innerHTML += `<tr class="table-active">
      <th scope="col">Image/صورة</th>
      <th scope="col">Note/ملاحظات</th>
      <th scope="col">Reason/الأسباب</th>
      <th scope="col">Rate/التقييم</th>
      <th scope="col">${ele.name}</th>
    </tr>`;
        ele["data"].forEach((element) => {
          if (element.rate === "1")
            element.rate = `<i class="fa-solid fa-circle-check fa-1x text-success"></i>`;
          else if (element.rate === "2")
            element.rate = `<i class="fa-solid fa-circle-exclamation fa-1x text-warning"></i>`;
          else
            element.rate = `<i class="fa-solid fa-circle-xmark fa-1x text-danger"></i>`;
          iv_table.innerHTML += `<tr><td><i class="fa-solid fa-2x fa-camera" onclick="javascript:Open_Modal('/images/vehicle/inside_vehicle/${iv_data[index]['for_image']}_${element.id}');"></i></td><td>${element.note}</td><td>${element.reason}</td><td>${element.rate}</td><td>${element.name}<br>${element.name_ar}</td></tr>`;
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });

  //load outside vehicle details
  var ov_data; //ov is outside vehicle
  await fetch("json/outside_vehicle.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      ov_data = data;
      let ov_table = document.getElementById("ov_vehicle_table");
      ov_data.forEach((ele,index) => {
        ov_table.innerHTML += `<tr class="table-active">
      <th scope="col">Image/صورة</th>
      <th scope="col">Note/ملاحظات</th>
      <th scope="col">Reason/الأسباب</th>
      <th scope="col">Rate/التقييم</th>
      <th scope="col">${ele.name}</th>
    </tr>`;
        ele["data"].forEach((element) => {
          if (element.rate === "1")
            element.rate = `<i class="fa-solid fa-circle-check fa-1x text-success"></i>`;
          else if (element.rate === "2")
            element.rate = `<i class="fa-solid fa-circle-exclamation fa-1x text-warning"></i>`;
          else
            element.rate = `<i class="fa-solid fa-circle-xmark fa-1x text-danger"></i>`;
          ov_table.innerHTML += `<tr><td><i class="fa-solid fa-2x fa-camera" onclick="javascript:Open_Modal('/images/vehicle/outside_vehicle/${ov_data[index]['for_image']}_${element.id}');"></i></td><td>${element.note}</td><td>${element.reason}</td><td>${element.rate}</td><td>${element.name}<br>${element.name_ar}</td></tr>`;
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });

  const gaugeElement = document.querySelector(".gauge");

  function setGaugeValue(gauge, value) {
    if (value < 0 || value > 1) {
      return;
    }

    gauge.querySelector(".gauge__fill").style.transform = `rotate(${
      value / 2
    }turn)`;
    gauge.querySelector(".gauge__cover").textContent = `${Math.round(
      value * 100
    )}%`;
  }

  let gauge = 0.4

  if(gauge<0.5){
    document.getElementById('indicator').style.color='red'
    document.getElementById('indicator_fill').style.backgroundColor='red'
    document.getElementById('pass_failed').innerText="Failed"
  }
  else{
    document.getElementById('indicator_fill').style.backgroundColor='#009578'
    document.getElementById('pass_failed').innerText="Passed"
  }

  setGaugeValue(gaugeElement, gauge);
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function Open_Modal(src) {
  // debugger;
  var img = document.getElementById("myImg");
  img.src = src + ".jpg";

  modal.style.display = "block";
}
