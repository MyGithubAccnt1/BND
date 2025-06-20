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

    { name: '3 SN Phosphatidyl Choline + B Vitamins', description: 'Dietary Supplement Softgel Capsule', src: '', category: 'supplements', type: 'Softgel Capsule' },
    { name: 'Alpha-Lipoic Acid, Gamma Linoleic Acid, Lutein and Zeaxanthin with B-Vitamins', description: 'Food Supplement Softgel Capsule', src: '', category: 'supplements', type: 'Softgel Capsule' },
    { name: 'Alpha Lipoic Acid (ALA)', description: '600mg Food Supplement Capsule', src: '', category: 'supplements', type: 'Capsule' },
    { name: 'Amino Acids', description: '600mg Dietary Supplement Softgel Capsule', src: '', category: 'supplements', type: 'Softgel Capsule' },
    
    { name: 'Amino Acids with B-Vitamins', description: '800mg Food Supplement Softgel Capsule', src: '', category: 'supplements', type: 'Softgel Capsule' },
    { name: 'Amino Acids with B-Vitamins', description: 'Dietary Supplement Softgel Capsule', src: '', category: 'supplements', type: 'Softgel Capsule' },
    { name: 'Ampalaya', description: '600mg Food Supplement Capsule', src: '', category: 'supplements', type: 'Capsule' },
    { name: 'Ashitaba (Angelica keiske Koidzumi)', description: 'Dietary Supplement Capsule 500mg', src: '', category: 'supplements', type: 'Capsule' },
    
    { name: 'Air Compressing Nebulizer', description: 'Machine Only', src: '', category: 'devices', type: 'digital-equipments' },
    { name: 'Aneroid Sphygmomanometer', description: '', src: '', category: 'devices', type: 'digital-equipments' },
    { name: 'Digital Blood Pressure Monitor', description: '', src: '', category: 'devices', type: 'digital-equipments' },
    { name: 'Digital Blood Pressure Monitor (Arm Style)', description: '', src: '', category: 'devices', type: 'digital-equipments' },
  
    { name: 'Absorbent Cotton Balls', description: '0.2 to 5g', src: '', category: 'devices', type: 'disposable-supplies' },
    { name: 'Absorbent Cotton Balls', description: '', src: '', category: 'devices', type: 'disposable-supplies' },
    { name: 'Adult Diaper Regular', description: '', src: '', category: 'devices', type: 'disposable-supplies' },
    { name: 'Adult Diaper Premium Pull-Ups', description: '', src: '', category: 'devices', type: 'disposable-supplies' },

    { name: 'Arm Crutch', description: '', src: '', category: 'devices', type: 'mobility-aid' },
    { name: 'Cane', description: '', src: '', category: 'devices', type: 'mobility-aid' },
    { name: 'Cane with Chair', description: '', src: '', category: 'devices', type: 'mobility-aid' },
    { name: 'Commode Chair', description: '', src: '', category: 'devices', type: 'mobility-aid' },
  ]

  const CategoryFilter = products.filter(product => 
    product.category.toLowerCase().includes(ID.toLowerCase())
  );

  const uniqueTypes = [...new Set(CategoryFilter.map(product => product.type))];

  let filteredProducts = CategoryFilter.filter(product => {
    if (search != '') {
      return (
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.type.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return true;
    }
  });

  useEffect(() => {
    if (!value) return;
    const handler = setTimeout(() => {
      setSearch(value);
    }, 300);

    return () => clearTimeout(handler);
  }, [value]);

  useEffect(() => {
    return setSearch('');
  }, [ID]);

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
      <div className="md:max-w-[80dvw] lg:max-w-[75dvw] mx-auto! flex flex-col gap-5 items-center min-h-[88dvh] px-5! md:px-0!">
        <div 
          style={{
            padding: '15px 60px 15px 50px',
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
            onInput={e => e.target.value == '' ? setSearch('') : null}
          />
        </div>
        <div 
          className='flex items-center gap-5 rounded-full'
        >
          {uniqueTypes.map((type, index) => (
            <button
              key={index}
              style={{
                padding: '8px 50px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(5px)'
              }}
              className='content-[""] rounded-full'
              onClick={() => setSearch(type)}
            >
              {type}
            </button>
          ))}
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
