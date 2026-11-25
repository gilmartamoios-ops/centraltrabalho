
import {
  CalendarDays,
  Users,
  Landmark,
  Globe,
  Leaf,
  Headphones,
  ChartNoAxesCombined,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const ferramentas = [
  {
    nome: "Agenda Monarca",
    descricao: "Organização e agenda",
    icone: CalendarDays,
    url: "https://agenda-monarca.vercel.app/",
  },
  {
    nome: "Gestão de Comunidade",
    descricao: "Gestão e relacionamento",
    icone: Users,
    url: "",
    breve: true,
  },
  {
    nome: "CÍVICA",
    descricao: "Participação e organização cidadã",
    icone: Landmark,
    url: "https://civicabr.vercel.app/",
  },
  {
    nome: "Comunidade Verde",
    descricao: "Projeto ambiental",
    icone: Leaf,
    url: "https://pvcabofrio.vercel.app/",
  },
  {
    nome: "Leitor Bimodal",
    descricao: "Leitura e audiobooks",
    icone: Headphones,
    url: "https://meu-audiobook-app.vercel.app/",
  },
  {
    nome: "Monarca Invest",
    descricao: "Investimentos e gestão financeira",
    icone: ChartNoAxesCombined,
    url: "https://monarca-invest.vercel.app/",
  },
];

const bsgi = [
  {
    nome: "Trilha Soka",
    url: "https://extra2.bsgi.org.br/login/?next=/trilhasoka/",
  },
  {
    nome: "BS+",
    url: "https://www.brasilseikyo.com.br/",
  },
  {
    nome: "Extra Net",
    url: "https://extra2.bsgi.org.br/login/?next=/comunidades/pagina/mdq9NjDOLvXrpWDQjxlQ4G8kJBARVxwg/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1424] text-white">
      <header className="border-b border-[#b99753]/30 bg-[#101d32]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#d6b66e]">
              SEU UNIVERSO DE GESTÃO
            </p>
            <h1 className="mt-2 text-2xl font-bold tracking-wide sm:text-3xl">
              CENTRAL DE TRABALHO
            </h1>
          </div>
          <Sparkles className="h-8 w-8 text-[#d6b66e]" />
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="mb-9">
          <h2 className="text-xl font-semibold text-[#e4c987]">
            Bem-vindo ao seu ambiente de trabalho
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Todos os seus projetos e ferramentas em um único lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ferramentas.map((item) => {
            const Icone = item.icone;

            return (
              <a
                key={item.nome}
                href={item.url || undefined}
                target={item.url ? "_blank" : undefined}
                rel={item.url ? "noopener noreferrer" : undefined}
                aria-disabled={!item.url}
                className={`group rounded-xl border border-[#b99753]/30 bg-[#14243a] p-5 transition ${
                  item.url
                    ? "hover:-translate-y-1 hover:border-[#d6b66e] hover:bg-[#1a2d47]"
                    : "cursor-default opacity-70"
                }`}
              >
                <Icone className="mb-5 h-8 w-8 text-[#d6b66e]" />
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold">{item.nome}</h3>
                  {item.url ? (
                    <ExternalLink className="h-4 w-4 text-[#d6b66e]" />
                  ) : (
                    <span className="text-xs text-[#d6b66e]">
                      Em breve
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  {item.descricao}
                </p>
              </a>
            );
          })}
        </div>

        <section className="mt-9 rounded-xl border border-[#b99753]/40 bg-[#14243a] p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <Globe className="h-8 w-8 text-[#d6b66e]" />
            <div>
              <h2 className="text-lg font-semibold">BSGI</h2>
              <p className="text-sm text-slate-400">
                Seus três ambientes de acesso
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {bsgi.map((item) => (
              <a
                key={item.nome}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-[#b99753]/30 bg-[#0b1424] px-4 py-4 transition hover:border-[#d6b66e] hover:bg-[#1a2d47]"
              >
                <span className="font-medium">{item.nome}</span>
                <ExternalLink className="h-4 w-4 text-[#d6b66e]" />
              </a>
            ))}
          </div>
        </section>
      </section>

      <footer className="border-t border-[#b99753]/20 px-5 py-7 text-center text-xs text-slate-500">
        CENTRAL DE TRABALHO · ORGANIZAÇÃO · ACESSIBILIDADE · GESTÃO
      </footer>
    </main>
  );
}
