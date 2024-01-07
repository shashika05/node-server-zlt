const axios = require("axios");

const srape = async () => {
  const response = await axios.get(
    "http://192.168.8.1/goform/goform_get_cmd_process?isTest=false&cmd=network_type%2Crssi%2Crscp%2Clte_rsrp&multi_data=1"
  );
  var dbm = 0;
  if (response.status !== 200) {
    dbm = 0;
  }
  const data = response.data;

  // removed minus sign
  dbm = parseInt(data.rssi.slice(1));

  console.log(dbm);

  // set 5 seconds interval
  setTimeout(srape, 5000);
};

srape();
