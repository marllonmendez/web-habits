import './styles/global.css';
// import { Habit } from "./components/Habit";

import HabitsLogo from './assets/logo.svg'

export function App() {
  return (
    <div className='w-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>
        <img src={ HabitsLogo } alt='Habits Logo'/>
      </div>
    </div>
  )
}
