import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';


export default class DeviceService {

    deviceList() {
        const url = `${API_BASE_URL}/api/device/`;
        return axios.get(url).then(response => response.data);
    }
    deviceCreate(device) {
        const url = `${API_BASE_URL}/api/device/`;
        return axios.post(url, device);
    }
    getDevice(id) {
        const url = `${API_BASE_URL}/api/device/${id}`;
        return axios.get(url).then(response => response.data);
    }
    deviceupdate(device) {
        const url = `${API_BASE_URL}/api/device/${device.id}/`;
        return axios.put(url, device);
    }
    deviceDelete(device) {
        const url = `${API_BASE_URL}/api/device/${device.id}/`;
        return axios.delete(url);
    }
}
