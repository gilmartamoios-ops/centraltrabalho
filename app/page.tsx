
"use client";

import { useState } from "react";
import {
  CalendarDays,
  Landmark,
  Globe,
  Leaf,
  Headphones,
  ChartNoAxesCombined,
  ExternalLink,
  Sparkles,
  GraduationCap,
  BriefcaseBusiness,
  ChevronDown,
  MessageSquare,
  FileSpreadsheet,
  CalendarRange,
} from "lucide-react";

const ferramentas = [
  {
    nome: "Agenda Monarca",
    descricao: "Organização e agenda",
    icone: CalendarDays,
    url: "https://agenda-monarca.vercel.app/",
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

const dadosComunidadeVerde = [
  {
    nome: "Fórum",
    url: "https://www.blogger.com/blog/posts/4258667834599754763",
    icone: MessageSquare,
  },
  {
    nome: "Orçamento",
    url: "https://docs.google.com/spreadsheets/d/13zCz_qES9awC8mFDRLETApKnrV12V3rRlJDUe_cqGKE/edit?gid=0#gid=0",
    icone: FileSpreadsheet,
  },
  {
    nome: "Câmara Municipal",
    url: "https://docs.google.com/spreadsheets/d/1CWeGlCTuvnAKlJATU6pFkNnWPLNdw96BB2DWxYGEgp0/edit?gid=0#gid=0",
    icone: FileSpreadsheet,
  },
  {
    nome: "Agenda",
    url: "https://calendar.google.com/calendar/u/0/r/week/2026/11/13",
    icone: CalendarRange,
  },
];

const gestaoComunidade = [
  {
    nome: "GA-rimpo",
    descricao: "Garimpo de oportunidades",
    url: "https://ga-rimpo.vercel.app/",
  },
  {
    nome: "Sala do Gestor",
    descricao: "Ambiente de gestão",
    url: "https://sala-gestor.vercel.app/",
  },
  {
    nome: "Ozonteck",
    descricao: "Escritório de gestão",
    url: "https://office.grupoozonteck.com/login",
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

const academico = [
  {
    nome: "Líbano",
    descricao: "Portal do estudante",
    url: "https://portal.faculdadelibano.edu.br/studentCourses",
  },
  {
    nome: "O Oleiro e a Argila",
    descricao: "Livro na Amazon",
    url: "https://www.amazon.com.br/dp/B0HL9JZBTW",
  },
];

function LinkCard({
  nome,
  descricao,
  url,
}: {
  nome: string;
  descricao?: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-3 rounded-lg border border-[#b99753]/30 bg-[#0b1424] px-4 py-4 transition hover:border-[#d6b66e] hover:bg-[#1a2d47]"
    >
      <div>
        <span className="font-medium text-white">{nome}</span>
        {descricao && (
          <p className="mt-1 text-xs text-slate-400">{descricao}</p>
        )}
      </div>
      <ExternalLink className="h-4 w-4 shrink-0 text-[#d6b66e]" />
    </a>
  );
}

function ComunidadeVerdeCard() {
  const [dadosAberto, setDadosAberto] = useState(false);

  return (
    <div className="rounded-xl border border-[#b99753]/30 bg-[#14243a] p-5 transition hover:border-[#d6b66e] hover:bg-[#1a2d47]">
      <a
        href="https://pvcabofrio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <Leaf className="mb-5 h-8 w-8 text-[#d6b66e]" />
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-white">Comunidade Verde</h3>
          <ExternalLink className="h-4 w-4 text-[#d6b66e]" />
        </div>
        <p className="mt-2 text-sm text-slate-400">
          Projeto ambiental
        </p>
      </a>

      <div className="mt-4 border-t border-[#b99753]/20 pt-3">
        <button
          type="button"
          onClick={() => setDadosAberto(!dadosAberto)}
          aria-expanded={dadosAberto}
          className="flex w-full items-center justify-between rounded-lg border border-[#b99753]/40 bg-[#0b1424] px-4 py-3 text-sm font-semibold tracking-wide text-[#e4c987] transition hover:border-[#d6b66e] hover:bg-[#1a2d47]"
        >
          <span>DADOS</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              dadosAberto ? "rotate-180" : ""
            }`}
          />
        </button>

        {dadosAberto && (
          <div className="mt-2 grid grid-cols-1 gap-2">
            {dadosComunidadeVerde.map((item) => {
              const Icone = item.icone;

              return (
                <a
                  key={item.nome}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-lg border border-[#b99753]/20 bg-[#101d32] px-3 py-3 text-sm text-slate-200 transition hover:border-[#d6b66e] hover:bg-[#1a2d47]"
                >
                  <span className="flex items-center gap-2">
                    <Icone className="h-4 w-4 text-[#d6b66e]" />
                    {item.nome}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-[#d6b66e]" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

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
            if (item.nome === "Comunidade Verde") {
              return <ComunidadeVerdeCard key={item.nome} />;
            }

            const Icone = item.icone;

            return (
              <a
                key={item.nome}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[#b99753]/30 bg-[#14243a] p-5 transition hover:-translate-y-1 hover:border-[#d6b66e] hover:bg-[#1a2d47]"
              >
                <Icone className="mb-5 h-8 w-8 text-[#d6b66e]" />
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold">{item.nome}</h3>
                  <ExternalLink className="h-4 w-4 text-[#d6b66e]" />
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
            <BriefcaseBusiness className="h-8 w-8 text-[#d6b66e]" />
            <div>
              <h2 className="text-lg font-semibold">
                GESTÃO DE COMUNIDADE
              </h2>
              <p className="text-sm text-slate-400">
                Ambientes de gestão e operação
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {gestaoComunidade.map((item) => (
              <LinkCard key={item.nome} {...item} />
            ))}
          </div>
        </section>

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
              <LinkCard key={item.nome} {...item} />
            ))}
          </div>
        </section>

        <section className="mt-9 rounded-xl border border-[#b99753]/40 bg-[#14243a] p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-[#d6b66e]" />
            <div>
              <h2 className="text-lg font-semibold">ACADÊMICO</h2>
              <p className="text-sm text-slate-400">
                Formação, estudos e leitura
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {academico.map((item) => (
              <LinkCard key={item.nome} {...item} />
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
