import nav from "./nav";

const Harder = () => {
    return `   <div> <div class="max-w-7xl mx-auto px-5 mt-9">
        <div class="flex justify-end">
            <button id="button" class="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" class="bi bi-justify"
                    viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                        d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
        </div>
   <div>  ${nav()}</div>
     
        <div id="user" class=" grid md:grid-cols-2 md:gap-8 justify-between my-7 ">
            <div class=" space-y-4 order-2 md:order-1">
                <h2 class="font-bold text-3xl">
                    Hi, I am Luong,<br>Creative Technologist
                </h2>
                <p class="text[18px] ">
                 Hiện tại, mình đang là sinh viên kì 5 tại trường FPT Polytechnic.
                 Mình bắt đầu học lập trình từ tháng 10 năm ngoái và phần lớn thời gian trong ngày mình đều ngồi học code. Ngoài việc học tập trên trường thì mình thường xuyên học thêm trên F8 Fullstack và trên các kênh Youtube như evondev, easy frontend, ...
                 Mình thực sự thích code và thử thách bản thân học được nhiều cái mới vào mỗi ngày mới. Mục tiêu hiện tại của mình là trở thành một lập trình viên Frontend.
                </p>
                
                <span class="bg-[#FF6464] p-4 rounded-full  inline-block"><a href="">Download Resume</a></span>
            </div>
            <div class="justify-end order-1 md:order-2  ">
                <img src="https://res.cloudinary.com/dndyxqosg/image/upload/v1654235294/280506188_1138943049998807_5392473630503021645_n_rtgk2f.jpg"
                    alt="" class="rounded-full w-[243px] h-[243px] md:ml-auto mx-auto md:mr-0">
            </div>
        </div>
    </div>`;
}

export default Harder