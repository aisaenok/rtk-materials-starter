import { Header } from './components/Header'
import { CategoryFilter } from './components/CategoryFilter'
import { Toolbar } from './components/Toolbar'
import { MaterialsList } from './components/MaterialsList'
import { StatusMessage } from './components/StatusMessage'

export default function App() {
  return (
    <main className="page">
      <Header />

      <section className="panel" aria-label="Фильтры материалов">
        <CategoryFilter />

        <Toolbar />
      </section>

      <StatusMessage />

      <MaterialsList />
    </main>
  )
}
