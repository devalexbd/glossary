import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import moduleData from './data/modules.json'
import Info from './components/Info'

function App() {
  const [moduleList, setModulelist] = useState(moduleData)
  const [module, setModule] = useState(moduleData[0])

  return (
    <>
    <div id="main-container">
      <div id="header-container">
        <h1>GLOSSARY</h1>
      </div>
      <div id="button-container">
        {moduleList.map((listItem, module) => {
          return (
            <Button
            key = {module}
            title = {listItem.name}
            action = {() => {setModule(listItem)}}
            />
          )
        })}
      </div>
      <div id="info-container">
        <Info
        title = {module.name.toUpperCase()}
        image = {module.image}
        description = {module.description}
        />
      </div>
    </div>

    </>
  )
}

export default App