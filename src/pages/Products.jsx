import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Products() {
  const { ID } = useParams();
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');

  const products = [
    { name: 'Acarbose', description: '500mg Tablet', src:'https://5.imimg.com/data5/SELLER/Default/2022/11/GK/FX/VI/160457072/acarbose-50-mg-1000x1000.png', category: 'pharmaceutical', type: 'Tablet' },
    { name: 'Amino acids + Sorbitol', description: 'Solution for Infusion (IV)', src:'https://www.siamclinicphuket.com/wp-content/uploads/2023/07/kidmin2-724x1024.png', category: 'pharmaceutical', type: 'Solution' },
    { name: 'Amikacin (as sulfate)', description: '250mg/mL (500mg/mL) SFI (IM/IV)', src:'https://th.bing.com/th/id/R.cb116fe01417a9a49614195d5b1f30cc?rik=1nGM1cI2u1PF9g&riu=http%3a%2f%2favenciaworld.com%2fwp-content%2fuploads%2f2017%2f05%2f2016_Product_V_Amikacin-500-mg-per-2-mL-_front-ADJ-3.png&ehk=5EWJTAv71vrYMXC7PG3u7cRhaG6bvXPGIwHoO3njLRQ%3d&risl=&pid=ImgRaw&r=0', category: 'pharmaceutical', type: 'Solution' },
    { name: 'Amlodipine besilate', description: '5mg Tablet', src:'https://www.sidomuncul.co.id/assets/images/product/Berlico/Prescription-Ethical/Amlodipine.png', category: 'pharmaceutical', type: 'Tablet' },
    { name: 'Amlodipine besilate', description: '10mg Tablet', src:'https://imfarmindfarmasi.com/wp-content/uploads/2020/02/amlodipine_kaplet_10_mg_allufoil_strip-1024x768.png', category: 'pharmaceutical', type: 'Tablet' },
    { name: 'Amoxicillin trihydrate', description: '500mg Capsule', src:'', category: 'pharmaceutical', type: 'Capsule' },
    { name: 'Ampicillin sodium', description: '1g PFI (IM/IV)', src:'', category: 'pharmaceutical', type: 'Injection' },
    { name: 'Ampicillin sodium', description: '500mg PFI (IM/IV)', src:'', category: 'pharmaceutical', type: 'Injection' },
    { name: 'Ampicillin sodium + Sulbactam sodium', description: '750mg PFI (IM/IV)', src:'', category: 'pharmaceutical', type: 'Injection' },
    { name: 'Ascorbic Acid', description: '500mg Tablet', src:'', category: 'pharmaceutical', type: 'Tablet' },
    { name: 'Ascorbic Acid', description: '1g Tablet', src:'', category: 'pharmaceutical', type: 'Tablet' },
    { name: 'Ascorbic Acid', description: '500mg Capsule', src:'', category: 'pharmaceutical', type: 'Capsule' },
    { name: 'Bisacodyl', description: '5mg Enteric Coated Tablet', src:'', category: 'pharmaceutical', type: 'Tablet' },
    { name: 'Bupivacaine HCl in 8% Dextrose', description: '5mg/mL Solution', src:'', category: 'pharmaceutical', type: 'Solution' },
    { name: 'Calcium + Cholecalciferol', description: '50mg/200IU Tablet', src:'', category: 'pharmaceutical', type: 'Tablet' },
    { name: 'Carbocisteine', description: '500mg Capsule', src:'', category: 'pharmaceutical', type: 'Capsule' },
    { name: 'Cefazolin sodium', description: '1g PFI (IM/IV)', src:'', category: 'pharmaceutical', type: 'Injection' },
    { name: 'Cefdinir', description: '300mg Capsule', src:'', category: 'pharmaceutical', type: 'Capsule' },
    { name: 'Cefepime hydrochloride', description: '1g PFI (IM/IV)', src:'', category: 'pharmaceutical', type: 'Injection' },
    { name: 'Cefixime trihydrate', description: '200mg FC Tablet', src:'', category: 'pharmaceutical', type: 'Tablet' },
    { name: 'Zinc', description: '50mg Tablet', src:'', category: 'pharmaceutical', type: 'Tablet' },
    { name: 'Water for Injection', description: 'Solution for Injection', src:'', category: 'pharmaceutical', type: 'Solution' }
  ]

  useEffect(() => {
    if (!value) return;
    const handler = setTimeout(() => {
      setSearch(value);
    }, 300);

    return () => clearTimeout(handler);
  }, [value]);

  const filteredProducts = search
  ? products.filter(
      product =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.type.toLowerCase().includes(search.toLowerCase())
    )
  : products;

  return (
    <div className='bg-gray-100 dark:bg-black py-5!'
      style={{
        backgroundImage: `
          repeating-linear-gradient(90deg, hsla(178,0%,66%,0.05) 0px, hsla(178,0%,66%,0.05) 1px, transparent 1px, transparent 104px),
          repeating-linear-gradient(0deg, hsla(178,0%,66%,0.05) 0px, hsla(178,0%,66%,0.05) 1px, transparent 1px, transparent 104px),
          repeating-linear-gradient(0deg, hsla(178,0%,66%,0.07) 0px, hsla(178,0%,66%,0.07) 1px, transparent 1px, transparent 26px),
          repeating-linear-gradient(90deg, hsla(178,0%,66%,0.07) 0px, hsla(178,0%,66%,0.07) 1px, transparent 1px, transparent 26px)
        `
      }}
    >
      <div className="md:max-w-[80dvw] lg:max-w-[75dvw] mx-auto! flex flex-col gap-5 items-center min-h-[88dvh]">
        <div 
          style={{
            padding: '20px 40px 15px 30px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            borderRight: '1px solid rgba(255, 255, 255, 0.2)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(5px)'
          }}
          className='flex items-center gap-2 rounded-full'
        >
          <span className='text-sm font-bold'>Search</span>
          <input 
            type='search' 
            style={{ fontFamily: "Karla" }}
            className='border border-t-0 border-x-0 outline-0 w-full text-[#7A7A7A]'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div 
                style={{
                  padding: '50px 35px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '5px',
                  borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(5px)'
                }}
                className='border border-gray-100 rounded-lg bg-[rgba(255,255,255,0.5)] flex flex-col gap-3 p-5!' key={index}
              >
                {
                  product.src ? (
                    <>
                      <img
                        src={product.src}
                        alt='Image' 
                        className='object-contain h-[200px] w-[200px] mx-auto! bg-white'
                      />
                    </>
                  ) : (
                    <>
                      <div className='relative overflow-hidden flex items-center justify-center h-[200px] w-[200px] mx-auto! bg-white'>
                        <div className='absolute content-[""] w-[60px] h-[60px] rounded-full bg-red-500 flex items-center justify-center'>
                          <div className='absolute content-[""] w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center'>
                            <div className='content-[""] -rotate-45 h-[10px] w-full bg-red-500'></div>
                          </div>
                        </div>
                        <span 
                          className="absolute w-[500px] -right-[93%] bottom-[60%] py-2! text-black text-center bg-[#6EC1E4] rotate-45"
                          style={{ fontFamily: "Changa" }}
                        >NO IMAGE AVAILABLE</span>
                      </div>
                    </>
                  )
                }
                <span 
                  className="mt-3! text-center font-bold text-[#7A7A7A] dark:text-gray-600"
                  style={{ fontFamily: "Karla" }}
                >
                    {product.name}
                </span>
                <span 
                  className="text-left text-[#7A7A7A] dark:text-gray-300"
                  style={{ fontFamily: "Karla" }}
                >
                    {product.description}
                </span>
              </div>
            ))
          ) : (
            <div 
              style={{
                padding: '50px 35px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '5px',
                borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(5px)'
              }}
              className='border border-gray-100 rounded-lg bg-[rgba(255,255,255,0.5)] flex flex-col gap-3 p-5!'
            >
              <div className='relative overflow-hidden flex items-center justify-center h-[200px] w-[200px] mx-auto! bg-white'>
                <div className='absolute content-[""] w-[60px] h-[60px] rounded-full bg-red-500 flex items-center justify-center'>
                  <div className='absolute content-[""] w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center'>
                    <div className='content-[""] -rotate-45 h-[10px] w-full bg-red-500'></div>
                  </div>
                </div>
                <span 
                  className="absolute w-[500px] -right-[93%] bottom-[60%] py-2! text-black text-center bg-[#6EC1E4] rotate-45"
                  style={{ fontFamily: "Changa" }}
                >NOT AVAILABLE</span>
              </div>
              <span 
                  className="mt-3! text-center font-bold text-[#7A7A7A] dark:text-gray-600"
                  style={{ fontFamily: "Karla" }}
                >
                    NO PRODUCT AVAILABLE
                </span>
                <span 
                  className="text-left text-[#7A7A7A] dark:text-gray-300"
                  style={{ fontFamily: "Karla" }}
                >
                    Try searching something else.
                </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
