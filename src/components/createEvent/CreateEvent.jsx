import React, { useState } from "react";
import Button from "../reuseables/Button";
import { Icon } from '@iconify/react/dist/iconify.js'

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[100vh]">
      <h1 className="text-3xl font-semibold mb-12">
            Welcome, You can now create an event here!
          </h1>        <form className="flex items-center p-10 h-[400px]">
          <div className="flex items-center gap-30">
            <div className="w-[420px]  shadow-md rounded-sm pt-10 px-6 pb-6">
              <div className="flex items-center gap-2 mb-10">
                <Icon icon="carbon:time" width="24" height="24" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={eventName}
                  placeholder="Event name"
                  className="w-full border-b border-gray-400 focus:outline-none bg-transparent"
                  onChange={(e) => setEventName(e.target.value)}
                  required
                />
              </div>
              <div className="w-full flex item-center gap-5">
                <div className="flex items-center gap-2 mb-10">
                  <Icon icon="ic:date-range" width="24" height="24" />

                  <input
                    type="text"
                    name="text"
                    id="text"
                    value={eventDate}
                    placeholder="Event date"
                    className="w-full border-b border-gray-400 focus:outline-none bg-transparent text-md font-normal"
                    onChange={(e) => setEventDate(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center gap-2 mb-10">
                  <Icon icon="mynaui:clock-circle" width="24" height="24" />

                  <input
                    type="text"
                    name="text"
                    id="text"
                    value={eventTime}
                    placeholder="Event time"
                    required
                    onChange={(e) => setEventTime(e.target.value)}
                    className="w-full border-b border-gray-400 focus:outline-none  bg-transparent"
                  />
                </div>
              </div>
              <div className="w-full flex item-center gap-5">
                <div className="flex items-center gap-2 mb-10">
                  <Icon icon="mynaui:clock-circle" width="24" height="24" />

                  <input
                    type="text"
                    name="text"
                    id="text"
                    value={eventStartTime}
                    placeholder="Starting time"
                    required
                    onChange={(e) => setEventStartTime(e.target.value)}
                    className="w-full border-b border-gray-400 focus:outline-none  bg-transparent"
                  />
                </div>
                <div className="flex items-center gap-2 mb-10">
                  <Icon icon="mynaui:clock-circle" width="24" height="24" />

                  <input
                    type="text"
                    name="text"
                    id="text"
                    value={eventEndTime}
                    placeholder="Ending time"
                    required
                    onChange={(e) => setEventEndTime(e.target.value)}
                    className="w-full border-b border-gray-400 focus:outline-none  bg-transparent"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 mb-10">
                <Icon icon="tabler:map-pin" width="24" height="24" />

                <input
                  type="text"
                  name="nalocationme"
                  id="location"
                  value={eventLocation}
                  placeholder="Location"
                  required
                  onChange={(e) => setEventLocation(e.target.value)}
                  className="w-full border-b border-gray-400 focus:outline-none  bg-transparent"
                />
              </div>
              <div className="flex justify-between px-3 mt-12">
                <Button type="button" className="w-[90px]">
                  Cancel
                </Button>
                <Button type="button" className="w-[90px]">
                  Preview
                </Button>
                <Button type="submit" className="w-[90px]">
                  Submit
                </Button>
              </div>
            </div>
            <div>
              <label
                htmlFor="image"
                aria-label="Upload event image"
                className="min-w-[250px] min-h-[250px] rounded-sm bg-gray-200 flex items-center justify-center cursor-pointer object-cover"
              >
                <input
                  type="file"
                  className="hidden"
                  name="image"
                  id="image"
                  accept="image/*"
                />
                <Icon icon="mdi:camera" width="32" height="32" className="text-gray-500" />

              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
