'use client'
import Image from 'next/image'
import soundpeats from '@/images/soundpeats-true-air.png'
import { useState } from 'react'

export default function Connect() {
  const [peats, setPeats] = useState(null)
  async function handleConnect(e) {
    // let options = {
    //   "filters": [{
    //     "name": "PLAYBULB Candle"
    //   }],
    //   "optionalServices": [0xFF02]
    // };
    // const peats = await navigator.bluetooth.requestDevice(options)
    if (!peats) {
      try {
        let options = {
          // filters: [{ services: ['battery_service'] }],
          acceptAllDevices: true,
          optionalServices: ['battery_service'],
        }

        const device = await navigator.bluetooth.requestDevice(options)
        console.log('device: ', device)
        const server = await device.gatt.connect()
        console.log('server: ', server)

        console.log('Getting  Services…')
        const services = await server.getPrimaryServices()
        console.log('Services: ', services)
        // console.log('Getting Battery Service…')
        // const service = await server.getPrimaryService('battery_service')
        // console.log('Service: ', service)

        // console.log('Getting Battery Level Characteristic…')
        // const level = await service.getCharacteristic('battery_level')
        // console.log('Level: ', level)

        // console.log('Reading Battery Level…')
        // const value = await level.readValue()
        // console.log('value: ', value)

        // console.log(`Battery percentage is ${value.getUint8(0)}`)
      } catch (error) {
        console.error(error)
      }
      //     .then((device) => {
      //       console.log(`Name: ${device.name}`)
      //       console.log(`DEVICE: ${device.gatt}`)
      //       // Do something with the device.
      //       const value = device.readUint8CharacteristicValueFromPrimaryService(
      //         'battery_service',
      //         'battery_level',
      //         0 /* offset */
      //       )

      //       console.log('value: ', value)
      //     })
      //     .catch((error) => console.error(`Something went wrong. ${error}`))
    }
  }

  return (
    <button value="connect" onClick={handleConnect} className="relative">
      <span className="lg:hidden relative md:top-10 top-5">
        Touch to connect
      </span>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]  "
        src={soundpeats}
        alt="soundpeats"
        width={600}
        height={480}
        priority
        title="Connect Soundpeats"
      />
    </button>
  )
}
