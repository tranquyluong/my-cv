
import { useEffect, useState } from "../../lib";
const product = () => {

  const [project, setproject] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/project").then(res => res.json()).then(project => setproject(project));

  }, []);

  return `</div>
        </div>
         <div class="md:max-w-7xl mx-auto mb-8 px-5">
                  <div class="justify-center font-bold  flex mt-8 ">
            <h2 class="md:text-left text-center text-5xl">Project</h2>
        </div>
        <div id="productWorks" class="grid grid-cols-3 gap-8 mt-8 " >
          ${project.map((project) => {

    return `  <div class=" mb-2 hover:drop-shadow-2xl ">
                  <div class="mt-2">
                    <img src="https://res.cloudinary.com/dndyxqosg/image/upload/v1654352556/Rectangle_30_z5qfxs.jpg"
                        width="480px" height="480px" alt="">
                  </div>
                 <div class="mx-4">
                  <a>  <h3 class="font-bold text-[30px] ">${project.title}</h3></a>
                    <div class="my-3">
                        <span class=" bg-[#142850] text-[#FFFFFF] rounded-xl px-2 w-[62px] text-[18px] ">${project.date}</span>
                        <span class="text-[#8695A4] pl-2">Dashboard</span>
                    </div>
                    <p class="text-[18px] pb-2">${project.description}</p>
                   </div>
            </div>
         `
  }).join("")}
          
 </div>

</div>`

}

export default product