import { CheckCircle2, ShieldCheck, Clock, ArrowRight, Star, Truck, EyeOff, CameraOff, MessageCircleOff, Frown, Users, Flame, Percent } from "lucide-react";
import peleHero from "@assets/pele_1772135135396_1772381017676.jpg";
import peleBaixados from "@assets/baixados_(1)_1772135141055_1772381030302.jpg";
import pele4 from "@assets/pele4_1772135144566_1772381034917.jpg";
import pele5 from "@assets/pele5_1772135150561_1772381037644.jpg";
import produtoSolo from "@assets/compressed_1755874050096_design-sem-nome-79.png_1772381316323.webp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useState } from "react";

export default function Home() {
  const CHECKOUT_URL = "https://app.coinzz.com.br/checkout/1-unidade-f2zsa-0";
  const [timeLeft, setTimeLeft] = useState(894);
  const [viewers, setViewers] = useState(142);
  const [stock, setStock] = useState(7);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev > 0 ? prev - 1 : 0), 1000);
    const viewerTimer = setInterval(() => setViewers(prev => prev + Math.floor(Math.random() * 5) - 2), 3000);
    const stockTimer = setTimeout(() => setStock(6), 45000);
    return () => { clearInterval(timer); clearInterval(viewerTimer); clearTimeout(stockTimer); };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

const handleCTA = () => {
  window.open(CHECKOUT_URL, '_blank');

  setTimeout(() => {
    window.location.href = '/obrigado.html';
  }, 3000);
};

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden selection:bg-pink-300 selection:text-pink-900 text-base md:text-lg">
      
      {/* Dynamic Scarcity Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white text-center py-2 md:py-3 px-4 font-black text-xs md:text-sm flex items-center justify-center gap-4 shadow-2xl border-b border-yellow-500/30 uppercase">
        <div className="flex items-center gap-2 text-yellow-400">
          <Users className="w-4 h-4 animate-pulse" />
          <span>{viewers} pessoas vendo agora</span>
        </div>
        <div className="hidden md:block w-px h-4 bg-gray-700"></div>
        <div className="flex items-center gap-2 text-red-500">
          <Flame className="w-4 h-4 animate-bounce" />
          <span>Restam apenas {stock} unidades</span>
        </div>
      </div>

      {/* Floating Sticky Bottom Mobile Button */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-[60] animate-in fade-in slide-in-from-bottom-10 duration-1000">
       <div className="w-full max-w-md mx-auto space-y-4">

  {/* 1 UNIDADE */}
<a href="https://app.coinzz.com.br/checkout/1-unidade-f2zsa-0" target="_blank">
  <button className="w-full bg-green-500 text-white font-bold py-4 rounded-xl">
    Comprar 1 Unidade - R$ 97
  </button>
</a>

  {/* 2 UNIDADES */}
  <a href="https://app.coinzz.com.br/checkout/2-unidades-vf4ic-0" target="_blank">
  <button className="w-full bg-blue-500 text-white font-bold py-4 rounded-xl border-2 border-black">
    🔥 Mais Vendido - 2 Unidades - R$ 189,90
  </button>
</a>

  {/* 3 UNIDADES */}
         <a href="https://app.coinzz.com.br/checkout/3-unidades-dez-porcento-desconto-0" target="_blank">
  <button className="w-full bg-red-500 text-white font-bold py-4 rounded-xl">
    💎 Melhor Oferta - 3 Unidades - R$ 259,90
  </button>
</a>

</div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 w-full flex justify-center bg-gradient-to-b from-pink-50 via-white to-white relative overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-pink-200 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase animate-pulse shadow-lg">
              <Percent className="w-4 h-4" />
              OFERTA DE LANÇAMENTO: 50% OFF
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-gray-900 tracking-tighter">
              Diga Adeus ao Melasma e <span className="text-pink-600">Sinta-se Linda</span> Novamente
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-lg leading-relaxed">
              O segredo das clínicas de estética agora na sua casa. <strong className="text-gray-900 underline decoration-yellow-400 decoration-4">Sem procedimentos caros</strong> e com segurança total.
            </p>

            {/* Price Anchoring */}
            <div className="flex flex-col items-center md:items-start gap-1 py-4">
              <span className="text-gray-400 line-through text-xl font-bold">De: R$ 297,00</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-black text-5xl md:text-6xl tracking-tighter">Por: R$ 97</span>
                <span className="bg-green-100 text-green-700 text-sm font-black px-2 py-1 rounded">VISTA</span>
              </div>
              <p className="text-red-600 font-black text-sm uppercase mt-2">Pague somente quando receber!</p>
            </div>
            
            <div className="w-full max-w-md">
              <button 
                onClick={handleCTA} 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-black text-xl md:text-2xl py-7 px-8 rounded-3xl shadow-[0_20px_40px_rgba(34,197,94,0.4)] transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center gap-1 relative animate-shine border-b-8 border-green-700 group"
              >
                <span className="flex items-center gap-3">
                  QUERO PAGAR SÓ NA ENTREGA
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                </span>
                <span className="text-xs font-bold opacity-80 uppercase tracking-widest">Frete Grátis apenas hoje!</span>
              </button>
              <div className="mt-6 flex items-center justify-center md:justify-start gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-500" /> Site Seguro</span>
                <span className="flex items-center gap-1"><Truck className="w-4 h-4 text-green-500" /> Entrega Rápida</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-[12px] border-white group">
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" onClick={handleCTA}>
                <div className="bg-white text-gray-900 rounded-full p-6 shadow-2xl animate-pulse">
                  <ArrowRight className="w-10 h-10" />
                </div>
              </div>
              <img src={peleHero} alt="Transformação" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-10 -right-5 md:-right-10 bg-yellow-400 text-gray-900 p-6 rounded-3xl shadow-2xl transform rotate-6 z-20 animate-bounce-subtle border-4 border-white">
              <p className="font-black text-4xl tracking-tighter">-50%</p>
              <p className="font-black text-xs uppercase tracking-widest leading-none">OFF HOJE</p>
            </div>
          </div>
        </div>
      </section>

      {/* VSL Script Content (Embedded for SEO/Persuasion) */}
      <section className="py-20 px-4 bg-gray-50 flex justify-center border-y border-gray-100">
        <div className="max-w-4xl w-full text-center space-y-10">
          <div className="inline-block p-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl mb-4">
            <div className="bg-white px-8 py-10 rounded-xl">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-8">
                "O que as clínicas de estética não querem que você saiba sobre as manchas..."
              </h2>
              <div className="space-y-6 text-left text-gray-700 text-lg leading-relaxed italic">
                <p>Imagine acordar amanhã, olhar no espelho e não ver mais aquela mancha escura que tanto te persegue...</p>
                <p>Você não precisa de peelings dolorosos ou laser de R$ 2.000,00. O segredo está na uniformização inteligente da nossa fórmula amazônica.</p>
                <p>Nós assumimos todo o risco por você. Se você não receber exatamente o que prometemos, você simplesmente não paga nada. <span className="font-black text-gray-900 bg-yellow-200 px-1">O pagamento é feito apenas no ato da entrega.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="py-24 bg-black text-white px-4 w-full flex justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-6xl w-full text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
            PROVAS <span className="text-green-500 underline">INDISCUTÍVEIS</span>
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            Não acredite apenas em nossas palavras. Acredite no espelho de quem já transformou sua vida.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[pele4, peleBaixados, pele5].map((img, i) => (
              <div key={i} className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col group transition-all hover:border-pink-500/50">
                <img src={img} alt={`Resultado ${i+1}`} className="w-full h-80 object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" />
                <div className="p-8 text-left">
                  <div className="flex text-yellow-400 mb-4 gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="fill-current w-5 h-5"/>)}
                  </div>
                  <p className="text-gray-300 italic text-lg font-medium leading-relaxed">
                    {i === 0 && "\"A melhora na aparência foi incrível! O melhor foi não pagar nada antes.\""}
                    {i === 1 && "\"Tem ajudado a uniformizar o tom das áreas afetadas pelo sol. Recomendo!\""}
                    {i === 2 && "\"Minha pele está com outro aspecto, super iluminada! Valeu cada centavo.\""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aggressive Final Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-red-600 via-red-700 to-black text-white text-center w-full flex justify-center relative">
        <div className="max-w-4xl w-full space-y-12">
          <div className="space-y-4 animate-pulse">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
              ÚLTIMA CHANCE!
            </h2>
            <p className="text-2xl md:text-3xl font-black text-yellow-300">
              OFERTA TERMINA EM {formatTime(timeLeft)}
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 shadow-3xl">
            <p className="text-xl md:text-2xl mb-8 leading-relaxed font-medium">
              Não deixe para amanhã a beleza que você pode ter hoje. <br/>
              Ao fechar esta página, você poderá perder o desconto de 50% e o frete grátis para sempre.
            </p>
            
       <div className="space-y-4 mt-6">

  {/* 1 UNIDADE */}
  <a href="https://app.coinzz.com.br/checkout/1-unidade-f2zsa-0" target="_blank">
    <button className="w-full bg-green-500 text-white font-bold py-4 rounded-xl">
      Comprar 1 Unidade - R$ 97
    </button>
  </a>

  {/* 2 UNIDADES */}
  <a href="https://app.coinzz.com.br/checkout/2-unidades-vf4ic-0" target="_blank">
    <button className="w-full bg-blue-500 text-white font-bold py-4 rounded-xl border-2 border-black">
      🔥 Mais Vendido - 2 Unidades - R$ 189,90
    </button>
  </a>

  {/* 3 UNIDADES */}
  <a href="https://app.coinzz.com.br/checkout/3-unidades-dez-porcento-desconto-0" target="_blank">
    <button className="w-full bg-red-500 text-white font-bold py-4 rounded-xl">
      💎 Melhor Oferta - 3 Unidades - R$ 197
    </button>
  </a>

</div>
            
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 grayscale opacity-60">
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-8 h-8" />
                <span className="text-[10px] font-black uppercase">Pague na Entrega</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Truck className="w-8 h-8" />
                <span className="text-[10px] font-black uppercase">Frete Grátis</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Star className="w-8 h-8" />
                <span className="text-[10px] font-black uppercase">Satisfação</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-8 h-8" />
                <span className="text-[10px] font-black uppercase">Aprovado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed FAQ */}
      <section className="py-24 px-4 bg-white w-full flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="text-4xl font-black text-center mb-16 tracking-tight text-gray-900">Dúvidas Frequentes</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "O pagamento é realmente na entrega?", a: "Sim! Você preenche seus dados agora e só entrega o dinheiro ou passa o cartão para o entregador quando o produto chegar na sua porta. Risco zero para você!" },
              { q: "Qual o prazo de entrega?", a: "Nossa entrega é expressa. Dependendo da sua região, você receberá o produto entre 3 a 7 dias úteis." },
              { q: "O produto é original?", a: "Sim, somos os fabricantes oficiais da fórmula AmazoLE. Garantimos a procedência e qualidade de cada pote enviado." },
              { q: "Como rastrear meu pedido?", a: "Assim que o pedido for despachado, você receberá o código de rastreio via WhatsApp para acompanhar cada passo até sua casa." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-2 border-gray-100 rounded-2xl px-6 py-2 shadow-sm data-[state=open]:border-cyan-500 transition-all">
                <AccordionTrigger className="text-lg font-black hover:no-underline text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg pt-2 pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="bg-black text-gray-600 py-16 text-center text-xs w-full flex justify-center border-t border-gray-900">
        <div className="max-w-4xl px-4 space-y-4">
          <p className="font-black text-gray-400 text-sm">AmazoLE - O Poder da Amazônia na sua Pele © {new Date().getFullYear()}</p>
          <p className="leading-relaxed opacity-60">
            Termos de Uso | Políticas de Privacidade | Contato <br/>
            Este site não faz parte do Google ou do Facebook. Além disso, este site não é endossado pelo Google ou pelo Facebook de nenhuma maneira. GOOGLE e FACEBOOK são marcas registradas de suas respectivas empresas.
          </p>
        </div>
      </footer>
    </div>
  );
}
