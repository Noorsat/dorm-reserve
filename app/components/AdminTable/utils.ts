export const getColumn = (selectedTab : any) => {
    if (selectedTab === "admins" || selectedTab === "students"){
        return [
            {
                column: "№",
                data: "index"
            },
            {
                column: "ID",
                data: "id"
            },
            {
                column: "First Name",
                data: "firstname"
            },
            {
                column: "Last Name",
                data: "lastname"
            },
            {
                column: "Email",
                data: "email"
            },
            {
                column: "Phone",
                data: "phone"
            },
            {
                column: "Faculty",
                data: "program"
            },
            {
                column: "Course",
                data: "course"
            },
            {
                column: "Gender",
                data: "gender"
            },
            {
                column: "Balance",
                data: "balance"
            },
            {
                column: "Place",
                data: "bed"
            },
        ]
    }else if (selectedTab == "beds"){
        return [
            {
                column: "№"
            },
            {
                column: "ID"
            },
            {
                column: "Block"
            },
            {
                column: "Floor"
            },
            {
                column: "Room"
            },
            {
                column: "Bed Number"
            },
            {
                column: "Price"
            },
            {
                column: "Status"
            },
            {
                column: "Owner"
            },
        ]
    }
}