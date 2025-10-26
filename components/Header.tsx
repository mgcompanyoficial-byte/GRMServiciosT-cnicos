import React, { useState, useEffect } from 'react';

const logoBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAGQCAYAAABv6pzrAAAMpElEQVR4nO3dfYAlV1UH8N+9V1d3s/u6V2d21XVnWVfTDTtG8c1gDBiUWDAYjCF+iJEYY8TEEIkaI24SExTjF8aYmKhR/DAxRkQjiPEaY4wRjFEU3SCIsWDQRmN3XWdnZde1ld29d/XcH511Zdeu22t3d3f1/Xy+5PV2n3tP33Ofc8+5d6fMlClTpkz5GZRSBSZMmTJloMOUi3TjG7/3e/O7r3/l1+b33/nuv7K+c8uUKVOmfJ9z2gW688Nf/sv5Xe//3vz+q//wW5J1S5kyZcqUr3m2XKAbX/jLvzG/+7pX5ve/9U//lvxNKVOmyJE6dMiQJnXo7d/6Lfmbtf533/rqfNu35vfe3X/l/ObX/sN8+9fm99797kvzR181f/TVk/nB174+v//1V+b33331/ObX/0t+ZcqUKcu2XKATUKZMmTJkygU6AWXKkyx55KfnP/zw/Pvf/35++OEH8zdPnjz5z95+e/7hD3/Iv3/++X/09tvzhz/8Yf7D7//9/PNf/jL/8Y9/zL9//vnzG0V79eoV/+nHH3+cv337Nv/p6NGj+bevX7/+0rQpU6YsrF2gE1B+5JFHzn/wwfPbt2/P3/zN3/xPjz76aH779u0/eufOHdOnT58+deLEiT/+67/+6w8++GB+/etf/58ef/zx/O233+bff/+9/M033+Tf37t3b/7t27fnf/KTn3zn9u3b8z/5yU+k3Tlz5sw/efLkP3388cf/afny5fnrr7/++dGjR/P/83//d2+//fb/tGvXrvzrr7/Ov//mm2/Onz59+vTbb7/9P3366af/dPTo0fzRo0f/p82bN/v+pUyZMmXh7AKdgPLnn3/+P3rzzTfzm2++mf/Zz372n5577rn8+eef/2fPnj3zN9988z/efffd+e233/5P7969m7/55pv/aefOnek/efLkP33zzTfz22+/nT/99NP57bff/p/efPPN/O23386//vrr/HfffTf//vrr/Hfffff/9Omnn85v/Pgx/+nTp0/zb7755g/OnDnzP3366ad/9oMf/CB/9uxZ/j/84Q+n3W+//eZ3f/d38x/+8Id/uvXWW/Pbbrvtn6dPnz5/5MiR/2nTpk35r7/+mu7rU6ZMmTJ5/gY6AeXf/OY3/9MzzzyT3/zmN/907969+TfffPP/9Oijj+Zvvvnmf/ro0aP5m2+++a/ff//9P/v27Zvf//738x/84Ae/87Of/exfP/jgg/kTTzzxO7/61a/++fXXX/9v//3v/Pjjj/8XX3xx/oUXXsivv/76d+eff37+9ddf8yuvvJL/61//+g8++OCD+fjjj//zP/zhD/kXX3zxP33xxRfzl7/85X/afvvt+fPPP//z//u//+f//M//+fPPP//f/u3f/o+uvvrqfPXVV+eff/75P/v27X7fLz/88Pz8+fP/tHbt2nz++ef/6c0338zfuXNn/uWXX/5v/cFfPvgg/+WXX/73H3zwQf6XX36Z//bbb/NvfvOb3/31X/+1/+z85S9/+T/79u175bRpU6b8lU0g0gkq/+///b/zz3/+8/zud7+b//znP88//elP/9O7776bf/vtt/nf/OY3/+mdO3fmb7755p+9+OKL87e//e0//Yc//CF//fXX/2n77bfnb7755p/9zW9+c37xxRcn399//33+/vvv/5d/7LHH/mvNmjX5119/nff93//93/nNN9/Mb9++Pf/mm2/mP/7xj/nXrl2b//XXX/Ovf/3r83e/+92/+9e//rWky5QpU5Ztn906AY2u978J/eX333+/vM/f/u3fzj/4wQ/ydx82ZcqUKRPHXKALaH2lS5kyZcrE2h2gE1B+4IEHzr/wwgt/9cILL/z1L3/5y8m7pkyZMmXKFt8GUH/j/fff//vPPvvsvPfeeyffrWXLlr123333Tf/pT3+6vM/Tp09/+9//+5/uv/XWW5P3TpkyZcqUSwY6AWXf+ta3/r133nnnd/fdd+fnn39+fs+ePZP327Zt+/LLL788bfr06fnDH/7w8p6ePn36f7/00kvTfvbs2e/5S5kyZcpSOt1A3W/77bef3n///ZN3T5069fr3f//30/7Tn/60vM8rV67Mf//730+/tWvXzr/++uvJ+9dff336H3zwwf/555+fvF+xYoVffvTRR6fdvvzyy3/+85+fdt/2229f63jKlClTlp07dALqO3bs+G+//faTd0+cODH9VqxYkd5/6qmn/uCLL76Y/v/6r/867b7rrrv++/btO+3/9V//dfq+efPmeffZZ5/NP/vsM/0fP378vX75z38+/ec//zn9Hj16dHrbtm175eOPP57+/OWvfzl9X7t27Xv+U6ZMmTIVgU5A+ddf//qffumll/7tT37yk9OnTp067euvf/1v/+KLL6b99ddf//ePHz+efffdd6ffOXPm/P333z/t3nnnndOnT5+e/umnn/7bN954I/3/5S9/mX7Xrl2bv/rqq9Pvu+++m7/44ovp9z/+8Y9+//vfP+0++uij7/23bt16/eMf/3j6vfTSS9/zV0+ZMmXKnjs6AWVf+MIX/v5//ud//tO1a9dOmz9//vSvec973jPtyJEj03/y5Mn/edmyZfnf//3fp1+dO3eefv327dvr27Ztu/5XpkyZMmWWgU5A+fPPP5/+lClT0+/69evX/v73v//zzjvvnH7r169f+9SpU5dffvll+t3f//3f7z116pT5M9/5znfm//zP//zrr3/96+lvf/vb73nKlClTlp1z6wTU89atW5f2j370o9N+4MCB+frrr6c9ceLEd+edd9556tq1a6/fcccd+Z//+Z/vf//73//N3/zN3/zWd77znd+ZM2fOv/baa9N38uTJr33xi1/8zZ/85Cfv/cxnPvNbf/zxx/O/+c1vfn+ZMmXKlCWf3QK6m3bKlClTpowBdAJqpkyZMmVKgB2gE1CmTJkyZcoFOgFlTJkyZcqUC3QCypkyZcqUKRfodJSpY2f//a/P/d9f+5p8LpkyZcrk2W2nXLx48eLNN9/8/aVLl07bdNNN873vfe90/9e+9rW/u+aaa+bf//5303/3u9/97gceeGC6X5kyZcpkMwdA/e3evfvbH3zwQbq9devW0w4ePDjd/9lnn33tb37zm9/917/+Nf2+4oorJt/rU6ZMmTJ5dAJqjxw5Mm3EiBHTR40alf4XXnhhun/llVd+c+nSpfnd7343/c4666y/vOuuu37rrrvumm6/8sorJt/rU6ZMmTJ57lYBNSZNmjTt6tWr/5t169a9eu+9907fM2fO/H6XL19++rfffvt/+9577732d7/73fS/YMGC/Nlnn/3N3/7t302/c8455yZMmTJlyhQLdAIqpkyZMmVKgHl3gU5AmTJlypQpA13TKVOmTJkyh0CnokwZMmXK5NhAp6JMGYI7derU6bfffnv9/fffv3799den39NOO23avffee6ff6NGj/+4LX/jC9B//+MfTr1+/fnv9/vvvT//73/8+3fXXXz/97rvvvn7//fdPf3z44Yfpf/zxx/997969p//06dP/u+uuu06/ffv2/f4pU6ZMGW50gU5FmTKEDRo0aNoPf/jD9Pvuu+9Ov2nTptN+/PHH02/RokXT5s2bN/2HHnpoun/llVdO+5e//OX0e/bsWfr95JNP/vu//vWv037XXXdN++6770732LFj03/y5Mnf/9WvfnX6Xbt27ffPmTJlyvBjF+hUlClDxo8fP23atGnTRowYkf4HHnhgun/mmWdOu2zZsun+4x//eNqRI0em/cADD0z7/fffP3306NHJt759+6bdvHnztPvvv3+6/8ADD0zbvHnzdP8TTzzxm4MHD067YMGC/D///POfv+iii37rrbfeOu2ZZ555/ZSpkyZl2i3Q6SqSJUuWTFv//vc/+/rrr6efffbpvffee/N33nnn/Iknnsg/9NBD+d/5znem38GDB/OvfvWr6ffQoUPzjz32WP7yyy/nP/jgg/lPfvKT6bfffnv+9ddf89e//vXZP/7xj/nnn3/+P3r66afzn/3sZ+dvf/vb83e/+9208+fP/++vfe1r37/00kvT99JLL32vT5kyZcl9dIJq9uzZc/7xj3+cf/rpJ+3JJ5/Mv/3223/69ttv/80zzzxz/ttvv+VffeWV+TfddNPp3/jGN6Z/0003nX7PP//8+vvf//50v3nz5j99+vTpb/32b/+2/jNnzvwfPnz4g/Pnz883bdqUf/zxx/Nf/OIXd+jE6dOmTFlY0AmYMmVKQ+2xxx777o033pgePHhwes2aNUt/3759U3/nnXcm39uyZcv0N998c/ovX758/Tlz5vzbvHnze79x48bpb9++ff2mTZt+/3r16tVrkyZNev/v3bs3fevWrft9f+DAgWkzZsz431mzZk0bN27c/Pbt26ff9ddfP/0NGzb8/uuvvfbeP3ny5DSffPLJ9D/zzDPvffv27avXrFlz+k2aNOm9Z82aNe2vvvpaes+ePen//vvvL30KU6ZMmXLFQBegTFnMDRs2TFs4cOBAP/vsM33//ffP37hx43T33Xdfuu68886/vvTSS6ff+eef/34dOnTo+rnnnpueMGHCtHv27JnenTt3fr8+cuRIesWKFdP/0EMP/daAAQPSpkyZcmXIFujsFWXKEDh58uRps2bNun7hhRf+/gsvvPC/N2/enH7z5s17+y1btvzBgwYNOn/++efz9ddfP23s2LHJv1OmTBlCV6fSlSlDhI8++uibDRo06PwLL7zwhY8++uid/f3vf3/9yy+/vD7zzDO/s3z58k+MHz9+2n//+99zZcyUKRMn0QW6WmVKeH/u3Ln03bt3r98tXLhwen/yySd/tWrVKv3uu+9e//nz59/6+OOP/62iTJkyZeHpgl2gTJkyZcoFOgFlTJkyZcqUC3QCypkyZcqUKRfodJSpY2f//a/P/d9f+5p8LpkyZcrk2W2nXLx48eLNN9/8/aVLl07bdNNN873vfe90/9e+9rW/u+aaa+bf//5303/3u9/97gceeGC6X5kyZcpkMwdA/e3evfvbH3zwQbq9devW0w4ePDjd/9lnn33tb37zm9/917/+Nf2+4oorJt/rU6ZMmTJ5dAJqjxw5Mm3EiBHTR40alf4XXnhhun/llVd+c+nSpfnd7343/c4666y/vOuuu37rrrvumm6/8sorJt/rU6ZMmTJ57lYBNSZNmjTt6tWr/5t169a9eu+9907fM2fO/H6XL19++rfffvt/+9577732d7/73fS/YMGC/Nlnn/3N3/7t302/c8455yZMmTJlyhQLdAIqpkyZMmVKgHl3gU5AmTJlypQpA13TKVOmTJkyh0CnokwZMmXK5NhAp6JMGYI7derU6bfffnv9/fffv3799den39NOO23avffee6ff6NGj/+4LX/jC9B//+MfTr1+/fnv9/vvvT//73/8+3fXXXz/97rvvvn7//fdPf3z44Yfpf/zxx/997969p//06dP/u+uuu06/ffv2/f4pU6ZMGW50gU5FmTKEDRo0aNoPf/jD9Pvuu+9Ov2nTptN+/PHH02/RokXT5s2bN/2HHnpoun/llVdO+5e//OX0e/bsWfr95JNP/vu//vWv037XXXdN++6770732LFj03/y5Mnf/9WvfnX6Xbt27ffPmTJlyvBjF+hUlClDxo8fP23atGnTRowYkf4HHnhgun/mmWdOu2zZsun+4x//eNqRI0em/cADD0zbvHnztPvvv3+6/8ADD0zbvHnzdP8TTzzxm4MHD067YMGC/D///POfv+iii37rrbfeOu2ZZ555/ZSpkyZl2i3Q6SqSJUuWTFv//vc/+/rrr6efffbpvffee/N33nnn/Iknnsg/9NBD+d/5znem38GDB/OvfvWr6ffQoUPzjz32WP7yyy/nP/jgg/lPfvKT6bfffnv+9ddf89e//vXZP/7xj/nnn3/+P3r66afzn/3sZ+dvf/vb83e/+9208+fP/++vfe1r37/00kvT99JLL32vT5kyZcl9dIJq9uzZc/7xj3+cf/rpJ+3JJ5/Mv/3223/69ttv/80zzzxz/ttvv+VffeWV+TfddNPp3/jGN6Z/0003nX7PP//8+vvf//50v3nz5j99+vTpb/32b/+2/jNnzvwfPnz4g/Pnz883bdqUf/zxx/Nf/OIXd+jE6dOmTFlY0AmYMmVKQ+2xxx777o033pgePHhwes2aNUt/3759U3/nnXcm39uyZcv0N998c/ovX758/Tlz5vzbvHnze79x48bpb9++ff2mTZt+/3r16tVrkyZNev/v3bs3fevWrft9f+DAgWkzZsz431mzZk0bN27c/Pbt26ff9ddfP/0NGzb8/uuvvfbeP3ny5DSffPLJ9D/zzDPvffv27avXrFlz+k2aNOm9Z82aNe2vvvpaes+ePen//vvvL30KU6ZMmXLFQBegTFnMDRs2TFs4cOBAP/vsM33//ffP37hx43T33Xdfuu68886/vvTSS6ff+eef/34dOnTo+rnnnpueMGHCtHv27JnenTt3fr8+cuRIesWKFdP/0EMP/daAAQPSpkyZcmXIFujsFWXKEDh58uRps2bNun7hhRf+/gsvvPC/N2/enH7z5s17+y1btvzBgwYNOn/++efz9ddfP23s2LHJv1OmTBlCV6fSlSlDhI8++uibDRo06PwLL7zwhY8++uid/f3vf3/9yy+/vD7zzDO/s3z58k+MHz9+2n//+99zZcyUKRMn0QW6WmVKeH/u3Ln03bt3r98tXLhwen/yySd/tWrVKv3uu+9e//nz59/6+OOP/62iTJkyZeHpgl2gTJkyZcoFOgFlTJkyZcqUC3QCypkyZcqUKRdodFSoY2b//a/P/d9f+5p8LpkyZcrk2W2nXLx48eLNN9/8/aVLl07bdNNN873vfe90/9e+9rW/u+aaa+bf//5303/3u9/97gceeGC6X5kyZcpkMwdA/e3evfvbH3zwQbq9devW0w4ePDjd/9lnn33tb37zm9/917/+Nf2+4oorJt/rU6ZMmTJ5dAJqjxw5Mm3EiBHTR40alf4XXnhhun/llVd+c+nSpfnd7343/c4666y/vOuuu37rrrvumm6/8sorJt/rU6ZMmTJ57lYBNSZNmjTt6tWr/5t169a9eu+9907fM2fO/H6XL19++rfffvt/+9577732d7/73fS/YMGC/Nlnn/3N3/7t302/c8455yZMmTJlyhQLdAIqpkyZMmVKgHl3gU5AmTJlypQpA13TKVOmTJkyh0CnokwZMmXK5NhAp6JMGYI7derU6bfffnv9/fffv3799den39NOO23avffee6ff6NGj/+4LX/jC9B//+MfTr1+/fnv9/vvvT//73/8+3fXXXz/97rvvvn7//fdPf3z44Yfpf/zxx/997969p//06dP/u+uuu06/ffv2/f4pU6ZMGW50gU5FmTKEDRo0aNoPf/jD9Pvuu+9Ov2nTptN+/PHH02/RokXT5s2bN/2HHnpoun/llVdO+5e//OX0e/bsWfr95JNP/vu//vWv037XXXdN++6770732LFj03/y5Mnf/9WvfnX6Xbt27ffPmTJlyvBjF+hUlClDxo8fP23atGnTRowYkf4HHnhgun/mmWdOu2zZsun+4x//eNqRI0em/cADD0zbvHnztPvvv3+6/8ADD0zbvHnzdP8TTzzxm4MHD067YMGC/D///POfv+iii37rrbfeOu2ZZ555/ZSpkyZl2i3Q6SqSJUuWTFv//vc/+/rrr6efffbpvffee/N33nnn/Iknnsg/9NBD+d/5znem38GDB/OvfvWr6ffQoUPzjz32WP7yyy/nP/jgg/lPfvKT6bfffnv+9ddf89e//vXZP/7xj/nnn3/+P3r66afzn/3sZ+dvf/vb83e/+9208+fP/++vfe1r37/00kvT99JLL32vT5kyZcl9dIJq9uzZc/7xj3+cf/rpJ+3JJ5/Mv/3223/69ttv/80zzzxz/ttvv+VffeWV+TfddNPp3/jGN6Z/0003nX7PP//8+vvf//50v3nz5j99+vTpb/32b/+2/jNnzvwfPnz4g/Pnz883bdqUf/zxx/Nf/OIXd+jE6dOmTFlY0AmYMmVKQ+2xxx777o033pgePHhwes2aNUt/3759U3/nnXcm39uyZcv0N998c/ovX758/Tlz5vzbvHnze79x48bpb9++ff2mTZt+/3r16tVrkyZNev/v3bs3fevWrft9f+DAgWkzZsz431mzZk0bN27c/Pbt26ff9ddfP/0NGzb8/uuvvfbeP3ny5DSffPLJ9D/zzDPvffv27avXrFlz+k2aNOm9Z82aNe2vvvpaes+ePen//vvvL30KU6ZMmXLFQBegTFnMDRs2TFs4cOBAP/vsM33//ffP37hx43T33Xdfuu68886/vvTSS6ff+eef/34dOnTo+rnnnpueMGHCtHv27JnenTt3fr8+cuRIesWKFdP/0EMP/daAAQPSpkyZcmXIFujsFWXKEDh58uRps2bNun7hhRf+/gsvvPC/N2/enH7z5s17+y1btvzBgwYNOn/++efz9ddfP23s2LHJv1OmTBlCV6fSlSlDhI8++uibDRo06PwLL7zwhY8++uid/f3vf3/9yy+/vD7zzDO/s3z58k+MHz9+2n//+99zZcyUKRMn0QW6WmVKeH/u3Ln03bt3r98tXLhwen/yySd/tWrVKv3uu+9e//nz59/6+OOP/62iTJkyZeHpgl2gTJkyZcoFOgFlTJkyZcqUC3QCypkyZcqUKRfoFFT+H3b4yKjP3v1sAAAAAElFTkSuQmCC";

const navLinks = [
  { href: '#services', label: 'Servicios' },
  { href: '#about', label: 'Sobre Nosotros' },
  { href: '#brands', label: 'Marcas' },
  { href: '#contact', label: 'Contacto' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        // Adjust for sticky header height if necessary
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };
  
  useEffect(() => {
    if(isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#" onClick={handleSmoothScroll} className="shrink-0">
            <img src={logoBase64} alt="GRM Servicios Técnicos Logo" className="h-14 w-auto" />
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={handleSmoothScroll} className="text-secondary font-medium hover:text-primary transition duration-300">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:+34697860762" className="hidden sm:inline-block bg-accent hover:opacity-90 text-white font-bold py-2 px-5 rounded-full transition duration-300 shadow-lg">
              ¡Llama Ahora!
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-secondary focus:outline-none"
              aria-label="Abrir menú"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 pt-16">
              {navLinks.map(link => (
                  <a key={link.href} href={link.href} onClick={handleSmoothScroll} className="text-3xl text-secondary font-bold hover:text-primary transition duration-300">
                      {link.label}
                  </a>
              ))}
              <a href="tel:+34697860762" className="mt-8 bg-accent hover:opacity-90 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 shadow-lg">
                ¡Llama Ahora!
              </a>
          </div>
      </div>
    </header>
  );
};

export default Header;