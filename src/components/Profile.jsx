import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import RightCornerUser from "./RightCornerUser";

const Profile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const state = useSelector((state) => state.users);
  const position = [user?.address?.geo?.lat ?? 51.505, user?.address?.geo?.lng ?? -0.09];
  useEffect(() => {
    setUser(state.find((one) => one.id === Number(id)));
  }, [id, state, position]);

  console.log(position)
  

  return (
    <div className="w-[70%] ">
      <div className="flex justify-between mt-16 border-b">
        <p className="font-medium text-xl text-gray-700">Profile</p>
        <RightCornerUser user={user} />
      </div>
      <div className="flex w-full">
        <div className="w-[30%] text-center ">
          <div className="mt-10 border-r w-full">
            <img
              className="w-48 h-48 mx-auto rounded-full"
              src={user?.profilepicture}
              alt="Profile Picture"
            />
            <p className="font-medium text-xl text-gray-700">{user?.name}</p>
          </div>
          <div className="w-full border-r mx-auto text-left">
            <p className="w-full pt-2">
              {" "}
              <span className="font-normal text-md text-gray-500">
                Username{" "}
              </span>
              <span className="text-gray-500 mx-2">:</span>{" "}
              <span className="font-medium text-xl text-gray-700">
                {user?.username}
              </span>
            </p>
            <p className="w-full pt-2">
              {" "}
              <span className="font-normal text-md text-gray-500">e-mail </span>
              <span className="text-gray-500 mx-2">:</span>{" "}
              <span className="font-medium text-xl text-gray-700">
                {user?.email}
              </span>
            </p>
            <p className="w-full pt-2">
              {" "}
              <span className="font-normal text-md text-gray-500">Phone </span>
              <span className="text-gray-500 mx-2">:</span>{" "}
              <span className="font-medium text-xl text-gray-700">
                {user?.phone}
              </span>
            </p>
            <p className="w-full pt-2 pb-5 border-b">
              {" "}
              <span className="font-normal text-md text-gray-500">
                Website{" "}
              </span>
              <span className="text-gray-500 mx-2">:</span>{" "}
              <span className="font-medium text-xl text-gray-700">
                {user?.website}
              </span>
            </p>
          </div>
          <div className="text-left w-full border-r">
            <p className="font-normal text-lg pt-3 mb-3 pl-[25%]  text-gray-500">
              Company
            </p>
            <p className="w-full pt-2">
              {" "}
              <span className="font-normal text-md text-gray-500">Name </span>
              <span className="text-gray-500 mx-2">:</span>{" "}
              <span className="font-medium text-xl text-gray-700">
                {user?.company?.name}
              </span>
            </p>
            <p className="w-full pt-2">
              {" "}
              <span className="font-normal text-md text-gray-500">
                catchphrase{" "}
              </span>
              <span className="text-gray-500 mx-2">:</span>{" "}
              <span className="font-medium text-xl text-gray-700">
                {user?.company?.catchPhrase}
              </span>
            </p>
            <p className="w-full pt-2">
              {" "}
              <span className="font-normal text-md text-gray-500">bs </span>
              <span className="text-gray-500 mx-2">:</span>{" "}
              <span className="font-medium text-xl text-gray-700">
                {user?.company?.bs}
              </span>
            </p>
          </div>
        </div>
        <div className="w-[70%]">
          <div className="ml-12 mt-5">
            <p className="font-normal text-lg pt-3 mb-1 text-gray-500">
              Address :
            </p>
            <div className="pl-10">
              <p className="w-full pt-2">
                {" "}
                <span className="font-normal text-md text-gray-500">
                  Street{" "}
                </span>
                <span className="text-gray-500 mx-2">:</span>{" "}
                <span className="font-medium text-xl text-gray-700">
                  {user?.address?.street}
                </span>
              </p>
              <p className="w-full pt-2">
                {" "}
                <span className="font-normal text-md text-gray-500">
                  Suite{" "}
                </span>
                <span className="text-gray-500 mx-2">:</span>{" "}
                <span className="font-medium text-xl text-gray-700">
                  {user?.address?.suite}
                </span>
              </p>
              <p className="w-full pt-2">
                {" "}
                <span className="font-normal text-md text-gray-500">City </span>
                <span className="text-gray-500 mx-2">:</span>{" "}
                <span className="font-medium text-xl text-gray-700">
                  {user?.address?.city}
                </span>
              </p>
              <p className="w-full pt-2 pb-5 ">
                {" "}
                <span className="font-normal text-md text-gray-500">
                  Zipcode{" "}
                </span>
                <span className="text-gray-500 mx-2">:</span>{" "}
                <span className="font-medium text-xl text-gray-700">
                  {user?.address?.zipcode}
                </span>
              </p>
            </div>
          </div>
          <div className="w-full">
            <MapContainer className="w-full h-80" center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="Map data © <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
            />

              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>

            <div className="flex justify-end">
              <p className="pr-3">
                {" "}
                <span className="font-normal text-sm text-gray-500">Lat </span>
                <span className="text-gray-500 mr-1">:</span>{" "}
                <span className="font-medium text-sm text-gray-700">
                  {user?.address?.geo?.lat}
                </span>
              </p>
              <p className="">
                {" "}
                <span className="font-normal text-sm text-gray-500">Long </span>
                <span className="text-gray-500 mr-1">:</span>{" "}
                <span className="font-medium text-sm text-gray-700">
                  {user?.address?.geo?.lng}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
