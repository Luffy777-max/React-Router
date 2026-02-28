import React from 'react'

export default function About() {
    return (
        <div className="min-h-screen py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://imgs.search.brave.com/uKRIhfKw_Pn392PVfaCOYxUI_cHQxsHgRzL4PYJnmsM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjA5/MTMzODUzMS9waG90/by9jYXItdG9wLXZp/ZXctb24tdGhlLXdo/aXRlLWJhY2tncm91/bmQtc3VyZmFjZS13/aXRoLWNvcHktc3Bh/Y2UtZHJpdmluZy10/cmFpbmluZy1jb25j/ZXB0LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1RMFZ4QnZY/S1FKX1AwMHN3UXoy/T0RwTDFFWE5wUXAt/ajJYVHhZc0VVLTVn/PQ"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
