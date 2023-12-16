// destructuring Object, array
const { id, website, date } = Not
console.log(date);
const date { '2023', '12', '16'} = date
const year = date[0]
const month = date[1]
const day = date[2]
// spread operator
const dovat = {'caybua', 'cayriu'}
const dovatkhac = {'choiquetnha','choilaunha'}
const tatcadovat = dovat.concat(dovatkhac)
console.log(tatcadovat);
const all dovat = {...dovat, ...dovatkhac}
console.log(tatcadovat)

const animal = [
    {
        "name": "conca",
        "size": "small",
        "weight": 5
    },
    {
        "name": "concho",
        "size": "small",
        "weight": 10
    },
    {
        "name": "dadieu",
        "size": "medium",
        "weight": 200
    },
    {
        "name": "voimamut",
        "size": "big",
        "weight": 1000
    },
]

const weight = animal.map((item) => item.weight);
console.log(weight);

const number = [1,2,3,4,5,6,7,8,9,10];
const result = number.filter((checknum) => checknum %2 ==0);
console.log(result);

const portfolio = [
    {thing: "Can do Code", usable: "10/10"},
    {thing: "Creativity", usable: "11/10"},
    {thing: "English", usable: "10/10"},
];
const things =(data) => {
    return data.reduce((obj, item) => {
        obj[item.usable] = {thing: item.usable};
        return obj;
    }, {})
};
const thingss = things(portfolio);
console.log(thingss);

function restTest(...args) {
    console.log(arguments)
}

restTest(1,2,3,4,5,6);

//Arrow Function
const user1 = (name) => {
    console.log(name);
};
//hoac
Caigicungduoc.addEventListener('click', () => {
    container.classList.add("active");
});

const HAHAHA = async(data1,data2,data3) => {
    try{
        const HAHA = await HAHAHA(data1,data2,data3);
        alert("BanDaDung");
        console.log(HAHA);
    } catch(error){
        alert("BanDaSai");
        console.log(error.code);
    }
};

//Câu 3:
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import từ Firebase, Firebase sẽ chứa 1 mã code riêng, việc chúng ta làm là import vào và sử dụng, .
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// GetAuth: dùng để bảo mật thông tin,....,createUserWithEmailAndPassword: tạo tài khoản sử dụng email và password,.... 
// signInWithEmailAndPassword: Đăng nhập vào sử dụng email và password được tạo và lưu trong createUserWithEmailAndPassword
// Lấy từ firebase, đã có mã code riêng, phục vụ cho người dùng.
const firebaseConfig = {
// gọi hàm firebaseConfig từ firebase, các kí tự sau: là do firebase cung cấp, không tự tiện thêm hay bớt, array
  apiKey: "AIzaSyDz732QfFKUTkpBpKClG4afPIQaK9PzYNI",
  authDomain: "fire-base-53764.firebaseapp.com",
  databaseURL: "https://fire-base-53764-default-rtdb.firebaseio.com",
  projectId: "fire-base-53764",
  storageBucket: "fire-base-53764.appspot.com",
  messagingSenderId: "608918146594",
  appId: "1:608918146594:web:335a82e44762136505847b",
  measurementId: "G-44D2LDBBC4",
};
//Lấy API
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Resgister = async (auth, email, password) => {
    //async: đợi check auth, email, password.
    //export: xuất hàm.
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    alert("Đăng kí thành công");
    console.log(res);
    //log ra o f12 
  } catch (error) {
    alert("Đăng kí thất bại");
    console.log(error.code);
  }
};
//try: async await được tạo ra để đợi và xử lý thông tin, nếu không sử dụng async await thì sẽ không thành bài, try: để thử nếu có xử liệu(hoặc nhập dữ liệu đúng, không bị trùng, chưa tạo bao giờ thì sẽ alert("Đăng kí thành công"))
// còn nếu không có thì sẽ bắt lỗi và alert("ĐK thất bại")