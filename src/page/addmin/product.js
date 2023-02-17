import { useEffect, useState } from "../../../lib"

const adminproductPage = () => {

    const [project, setproject] = useState([]);
    useEffect(() => {
        fetch(" http://localhost:3000/project")
            .then(res => res.json())
            .then(project => setproject(project))

    }, [])
    return ` <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption
                class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Our products
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products
                    designed to help you work and play, stay organized, get answers, keep in touch, grow your business,
                    and
                    more.</p>
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>

                    <th scope="col" class="px-6 py-3">
                        description
                    </th>
                    <th>img </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
             ${project.map((project) => {
        return `   <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                    <td class="px-6 py-4">
                        ${project.title}
                    </td>
                    
                    <td class="px-6 py-4">
                      ${project.description}
                    </td>
                    <td></td>
                    <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> ||
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">xóa</a>
                    </td>
                </tr>`
    })}

            </tbody>
        </table>
    </div>`
}

export default adminproductPage