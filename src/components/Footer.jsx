import React from "react";

function Footer() {
  return (
    <div className="flex gap-5 w-full h-screen bg-zinc-900 p-20">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div>
          <h1 className="text-[8vw] uppercase leading-none -mb-7">Eye-</h1>
          <h1 className="text-[8vw] uppercase leading-none -mb-7">Opening</h1>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          className="w-16 h-16"
        >
          <path
            fill="#a4a29a"
            d="M89.5,48v14c0,2.21-1.79,4-4,4H78l-0.28-0.06C78.5,64.44,79,62.5,79,60c0-3.2-0.48-5.27-1.25-7	L76,32.8c-0.27-2.04-0.77-3.97-1.47-5.78L75,27c6.08,0,8.5,4.92,8.5,11v6h2C87.71,44,89.5,45.79,89.5,48z"
          ></path>
          <path
            fill="#eeecd9"
            d="M79,60c0,2.5-0.5,4.44-1.28,5.94C75.38,70.44,70.5,71,69,71c-2,0-7,0-7,13c0,4-9,4-12,4s-12,0-12-4	c0-13-5-13-7-13c-1.51,0-6.42-0.57-8.75-5.12C21.49,64.39,21,62.47,21,60c0-3.2,0.48-5.27,1.25-7c1.15-2.6,2.95-4.4,4.75-8	c3-6,2-12,2-15c10,4,17,4,21,4s11,0,21-4c0,3-1,9,2,15c1.8,3.6,3.6,5.4,4.75,8C78.52,54.73,79,56.8,79,60z M71.5,56c0-7-4-9-6-9	c-5,0-10.5,3-10.5,6.5s4.5,9.5,9.5,9.5C66.5,63,71.5,63,71.5,56z M54.7,70.45c0.19-0.28,0.22-0.64,0.09-0.94L50,59l-4.79,10.51	c-0.13,0.3-0.1,0.66,0.09,0.94l1.15,1.72c0.3,0.46,0.92,0.58,1.38,0.28l1.62-1.08c0.33-0.22,0.77-0.22,1.1,0l1.62,1.08	c0.46,0.3,1.08,0.18,1.38-0.28L54.7,70.45z M35.5,63c5,0,9.5-6,9.5-9.5S39.5,47,34.5,47c-2,0-6,2-6,9S33.5,63,35.5,63z"
          ></path>
          <path
            fill="#444445"
            d="M50,30.5v-4v-4v-4v-4V11c11.1,0,20.76,6.23,24.53,16.02c0.7,1.81,1.2,3.74,1.47,5.78L77.75,53	c-1.15-2.6-2.95-4.4-4.75-8c-3-6-2-12-2-15c-10,4-17,4-21,4V30.5z"
          ></path>
          <path
            fill="#444445"
            d="M65.5,47c2,0,6,2,6,9s-5,7-7,7c-5,0-9.5-6-9.5-9.5S60.5,47,65.5,47z"
          ></path>
          <path
            fill="#444445"
            d="M54.79,69.51c0.13,0.3,0.1,0.66-0.09,0.94l-1.15,1.72c-0.3,0.46-0.92,0.58-1.38,0.28l-1.62-1.08	c-0.33-0.22-0.77-0.22-1.1,0l-1.62,1.08c-0.46,0.3-1.08,0.18-1.38-0.28l-1.15-1.72c-0.19-0.28-0.22-0.64-0.09-0.94L50,59	L54.79,69.51z"
          ></path>
          <path
            fill="#444445"
            d="M50,30.5V34c-4,0-11,0-21-4c0,3,1,9-2,15c-1.8,3.6-3.6,5.4-4.75,8L24,32.8	c0.27-2.04,0.77-3.97,1.47-5.78c1.54-3.99,4.05-7.39,7.24-10.01C37.35,13.19,43.42,11,50,11v3.5v4v4v4V30.5z"
          ></path>
          <path
            fill="#444445"
            d="M45,53.5c0,3.5-4.5,9.5-9.5,9.5c-2,0-7,0-7-7s4-9,6-9C39.5,47,45,50,45,53.5z"
          ></path>
          <path
            fill="#a4a29a"
            d="M24.44,27.01l1.03,0.01c-0.7,1.81-1.2,3.74-1.47,5.78L22.25,53C21.48,54.73,21,56.8,21,60	c0,2.47,0.49,4.39,1.25,5.88L22,66h-7.5c-2.21,0-4-1.79-4-4V48c0-2.21,1.79-4,4-4h2v-6C16.5,32.11,18.77,27.31,24.44,27.01z"
          ></path>
          <path
            fill="#1f212b"
            d="M50,89c-3.556,0-13,0-13-5c0-12-4.205-12-6-12c-0.69,0-6.821-0.159-9.64-5.665	C20.458,64.566,20,62.435,20,60c0-3.046,0.412-5.33,1.336-7.407c0.604-1.367,1.377-2.522,2.194-3.746	c0.834-1.247,1.696-2.537,2.575-4.295c2.356-4.713,2.119-9.498,1.961-12.664C28.031,31.176,28,30.541,28,30	c0-0.332,0.165-0.642,0.439-0.828c0.275-0.186,0.624-0.224,0.932-0.101C39.192,33,45.958,33,50,33s10.808,0,20.628-3.929	c0.309-0.124,0.657-0.086,0.932,0.101C71.835,29.358,72,29.668,72,30c0,0.541-0.031,1.176-0.066,1.889	c-0.158,3.167-0.396,7.951,1.961,12.664c0.879,1.758,1.741,3.048,2.575,4.295c0.817,1.223,1.589,2.377,2.194,3.746l0,0	C79.588,54.67,80,56.954,80,60c0,2.47-0.469,4.624-1.393,6.401C75.777,71.843,69.686,72,69,72c-1.795,0-6,0-6,12	C63,89,53.556,89,50,89z M30.049,31.478c0.005,0.102,0.01,0.206,0.015,0.312c0.168,3.375,0.422,8.475-2.169,13.658	c-0.935,1.87-1.873,3.273-2.701,4.512c-0.802,1.199-1.494,2.235-2.029,3.445C22.359,55.214,22,57.248,22,60	c0,2.116,0.384,3.941,1.141,5.426C25.417,69.872,30.436,70,31,70c3.434,0,8,1.451,8,14c0,1.121,1.429,3,11,3s11-1.879,11-3	c0-12.549,4.566-14,8-14c0.561,0,5.547-0.127,7.833-4.521C77.607,63.989,78,62.146,78,60c0-2.752-0.359-4.786-1.164-6.593	c0-0.001,0-0.001-0.001-0.002c-0.536-1.21-1.228-2.246-2.029-3.445c-0.828-1.238-1.766-2.642-2.701-4.512	c-2.591-5.183-2.337-10.283-2.169-13.658c0.005-0.106,0.01-0.21,0.015-0.312C60.513,35,53.727,35,50,35S39.487,35,30.049,31.478z"
          ></path>
          <path
            fill="#1f212b"
            d="M61.5,36.99c-0.234,0-0.444-0.166-0.49-0.404c-0.053-0.271,0.124-0.534,0.395-0.586	c1.898-0.369,3.845-0.863,5.787-1.467c0.265-0.082,0.544,0.065,0.626,0.329s-0.065,0.544-0.329,0.626	c-1.976,0.615-3.959,1.118-5.893,1.494C61.563,36.987,61.531,36.99,61.5,36.99z"
          ></path>
          <path
            fill="#1f212b"
            d="M50,38c-3.503,0-9.366,0-17.488-2.513c-0.264-0.082-0.411-0.361-0.33-0.625	c0.082-0.263,0.36-0.412,0.625-0.33C40.786,37,46.554,37,50,37c1.593,0,3.775,0,6.45-0.268c0.285-0.023,0.52,0.173,0.547,0.448	c0.027,0.275-0.173,0.52-0.448,0.547C53.825,38,51.614,38,50,38z"
          ></path>
          <path
            fill="#1f212b"
            d="M52.72,73.115c-0.29,0-0.574-0.083-0.823-0.246l-1.625-1.083c-0.164-0.11-0.383-0.108-0.544,0	l-1.621,1.081c-0.338,0.22-0.736,0.295-1.125,0.219c-0.395-0.079-0.732-0.307-0.951-0.643l-1.147-1.715	c-0.28-0.414-0.332-0.957-0.133-1.417l4.794-10.519c0.163-0.356,0.747-0.356,0.91,0l4.79,10.51c0.203,0.469,0.151,1.012-0.131,1.428	l-1.149,1.717c-0.215,0.331-0.553,0.559-0.947,0.638C52.919,73.105,52.819,73.115,52.72,73.115z M50,70.706	c0.29,0,0.58,0.083,0.828,0.249l1.62,1.08c0.108,0.071,0.242,0.097,0.375,0.07c0.129-0.025,0.239-0.1,0.309-0.208l1.154-1.725	c0.094-0.139,0.111-0.315,0.046-0.464L50,60.206l-4.335,9.512c-0.061,0.14-0.043,0.316,0.049,0.453l1.152,1.722	c0.074,0.113,0.184,0.187,0.313,0.212c0.132,0.029,0.266,0.001,0.379-0.073l1.616-1.077C49.42,70.789,49.71,70.706,50,70.706z"
          ></path>
          <path
            fill="#1f212b"
            d="M77.749,54c-0.513,0-0.95-0.393-0.995-0.914l-1.75-20.2c-0.249-1.873-0.724-3.74-1.407-5.505	C69.999,18.037,60.737,12,50,12c-6.21,0-12.125,2.053-16.654,5.782c-3.103,2.548-5.503,5.867-6.942,9.598	c-0.683,1.766-1.158,3.633-1.412,5.551l-1.745,20.155c-0.048,0.55-0.528,0.961-1.083,0.91c-0.55-0.047-0.958-0.532-0.91-1.083	l1.75-20.2c0.279-2.12,0.794-4.142,1.534-6.054c1.563-4.052,4.17-7.656,7.538-10.422C36.96,12.215,43.327,10,50,10	c11.571,0,21.565,6.54,25.463,16.661c0.739,1.911,1.254,3.933,1.528,6.008l1.755,20.245c0.048,0.55-0.359,1.035-0.91,1.083	C77.807,53.999,77.778,54,77.749,54z"
          ></path>
          <path
            fill="#1f212b"
            d="M35.5,63.5c-2.051,0-7.5,0-7.5-7.5c0-7.793,4.692-9.5,6.5-9.5c5.087,0,11,3.058,11,7	C45.5,57.268,40.826,63.5,35.5,63.5z M34.5,47.5c-1.53,0-5.5,1.527-5.5,8.5c0,6.5,4.39,6.5,6.5,6.5c4.641,0,9-5.615,9-9	C44.5,50.472,39.547,47.5,34.5,47.5z"
          ></path>
          <path
            fill="#1f212b"
            d="M64.5,63.5c-5.326,0-10-6.232-10-10c0-3.942,5.913-7,11-7c1.808,0,6.5,1.707,6.5,9.5	C72,63.5,66.551,63.5,64.5,63.5z M65.5,47.5c-5.047,0-10,2.972-10,6c0,3.385,4.359,9,9,9c2.11,0,6.5,0,6.5-6.5	C71,49.027,67.03,47.5,65.5,47.5z"
          ></path>
          <path
            fill="#1f212b"
            d="M42,87.75c-0.276,0-0.5-0.224-0.5-0.5V81.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v5.75	C42.5,87.526,42.276,87.75,42,87.75z"
          ></path>
          <path
            fill="#1f212b"
            d="M46,88.25c-0.276,0-0.5-0.224-0.5-0.5V82.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v5.25	C46.5,88.026,46.276,88.25,46,88.25z"
          ></path>
          <path
            fill="#1f212b"
            d="M50,88.25c-0.276,0-0.5-0.224-0.5-0.5V83.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4.25	C50.5,88.026,50.276,88.25,50,88.25z"
          ></path>
          <path
            fill="#1f212b"
            d="M54,88.25c-0.276,0-0.5-0.224-0.5-0.5V82.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v5.25	C54.5,88.026,54.276,88.25,54,88.25z"
          ></path>
          <path
            fill="#1f212b"
            d="M58,87.75c-0.276,0-0.5-0.224-0.5-0.5V81.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v5.75	C58.5,87.526,58.276,87.75,58,87.75z"
          ></path>
          <path
            fill="#1f212b"
            d="M22,66.5h-7.5c-2.481,0-4.5-2.019-4.5-4.5V48c0-2.481,2.019-4.5,4.5-4.5H16V38	c0-7.019,3.066-11.207,8.414-11.49C24.602,26.5,24.801,26.5,25,26.5c0.276,0,0.5,0.224,0.5,0.5c0,0.286-0.243,0.49-0.529,0.5	c-0.171,0-0.342,0-0.504,0.009C17.97,27.853,17,34.229,17,38v6c0,0.276-0.224,0.5-0.5,0.5h-2c-1.93,0-3.5,1.57-3.5,3.5v14	c0,1.93,1.57,3.5,3.5,3.5H22c0.276,0,0.5,0.224,0.5,0.5S22.276,66.5,22,66.5z"
          ></path>
          <path
            fill="#1f212b"
            d="M21,63.5h-5.5c-1.378,0-2.5-1.122-2.5-2.5v-3.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V61	c0,0.827,0.673,1.5,1.5,1.5H21c0.276,0,0.5,0.224,0.5,0.5S21.276,63.5,21,63.5z"
          ></path>
          <path
            fill="#1f212b"
            d="M13.5,56c-0.276,0-0.5-0.224-0.5-0.5v-3c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v3	C14,55.776,13.776,56,13.5,56z"
          ></path>
          <path
            fill="#1f212b"
            d="M13.5,50c-0.276,0-0.5-0.224-0.5-0.5V49c0-1.378,1.122-2.5,2.5-2.5h1c0.276,0,0.5,0.224,0.5,0.5	s-0.224,0.5-0.5,0.5h-1c-0.827,0-1.5,0.673-1.5,1.5v0.5C14,49.776,13.776,50,13.5,50z"
          ></path>
          <path
            fill="#1f212b"
            d="M84.5,63.5H79c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5.5c0.827,0,1.5-0.673,1.5-1.5v-3.5	c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V61C87,62.378,85.878,63.5,84.5,63.5z"
          ></path>
          <path
            fill="#1f212b"
            d="M86.5,56c-0.276,0-0.5-0.224-0.5-0.5v-3c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v3	C87,55.776,86.776,56,86.5,56z"
          ></path>
          <path
            fill="#1f212b"
            d="M86.5,50c-0.276,0-0.5-0.224-0.5-0.5V49c0-0.827-0.673-1.5-1.5-1.5h-1c-0.276,0-0.5-0.224-0.5-0.5	s0.224-0.5,0.5-0.5h1c1.378,0,2.5,1.122,2.5,2.5v0.5C87,49.776,86.776,50,86.5,50z"
          ></path>
          <path
            fill="#1f212b"
            d="M85.5,66.5H78c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7.5c1.93,0,3.5-1.57,3.5-3.5V48	c0-1.93-1.57-3.5-3.5-3.5h-2c-0.276,0-0.5-0.224-0.5-0.5v-6c0-3.921-1.04-10.5-8-10.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5	c5.72,0,9,4.191,9,11.5v5.5h1.5c2.481,0,4.5,2.019,4.5,4.5v14C90,64.481,87.981,66.5,85.5,66.5z"
          ></path>
          <path
            fill="#1f212b"
            d="M50,34.5c-0.276,0-0.5-0.224-0.5-0.5V11c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v23	C50.5,34.276,50.276,34.5,50,34.5z"
          ></path>
          <path
            fill="#1f212b"
            d="M52.5,15h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5	S52.776,15,52.5,15z"
          ></path>
          <path
            fill="#1f212b"
            d="M52.5,19h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5	S52.776,19,52.5,19z"
          ></path>
          <path
            fill="#1f212b"
            d="M52.5,23h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5	S52.776,23,52.5,23z"
          ></path>
          <path
            fill="#1f212b"
            d="M52.5,27h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5	S52.776,27,52.5,27z"
          ></path>
          <path
            fill="#1f212b"
            d="M52.5,31h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5	S52.776,31,52.5,31z"
          ></path>
        </svg>
      </div>
      <div className="w-1/2">
      <div className="">
          <h1 className="text-[8vw] uppercase leading-none">Gameplay
            
          </h1>
          <div className="dets mt-10 ml-3 ">
                <a className="block text-xl" href="#">Instagram</a>
                <a className="block text-xl" href="#">Twitter</a>
                <a className="block text-xl" href="#">Unity</a>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
