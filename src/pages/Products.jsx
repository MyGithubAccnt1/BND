import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Products() {
  const { ID } = useParams();
  const glassmorphism = {
    padding: '15px 60px 10px 60px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    borderRight: '1px solid rgba(255, 255, 255, 0.2)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(5px)'
  }
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');

  const products = [
    {
      name: 'Acarbose',
      description: '500mg',
      src:'https://5.imimg.com/data5/SELLER/Default/2022/11/GK/FX/VI/160457072/acarbose-50-mg-1000x1000.png',
      category: 'pharmaceutical',
      type: 'Tablet' },
    { name: 'Amino acids + Sorbitol',
      description: 'Infusion (IV)',
      src:'https://www.siamclinicphuket.com/wp-content/uploads/2023/07/kidmin2-724x1024.png',
      category: 'pharmaceutical',
      type: 'Solution' },
    { name: 'Amikacin', 
      description: 'SFI (IM/IV)', 
      src:'https://th.bing.com/th/id/R.cb116fe01417a9a49614195d5b1f30cc?rik=1nGM1cI2u1PF9g&riu=http%3a%2f%2favenciaworld.com%2fwp-content%2fuploads%2f2017%2f05%2f2016_Product_V_Amikacin-500-mg-per-2-mL-_front-ADJ-3.png&ehk=5EWJTAv71vrYMXC7PG3u7cRhaG6bvXPGIwHoO3njLRQ%3d&risl=&pid=ImgRaw&r=0', 
      category: 'pharmaceutical', 
      type: 'Solution' },
    { name: 'Amlodipine besilate', 
      description: '5mg', 
      src:'https://www.sidomuncul.co.id/assets/images/product/Berlico/Prescription-Ethical/Amlodipine.png', 
      category: 'pharmaceutical', 
      type: 'Tablet' },
    { name: 'Amlodipine besilate', 
      description: '10mg', 
      src:'https://imfarmindfarmasi.com/wp-content/uploads/2020/02/amlodipine_kaplet_10_mg_allufoil_strip-1024x768.png', 
      category: 'pharmaceutical', 
      type: 'Tablet' },
    { name: 'Amoxicillin trihydrate', 
      description: '500mg', 
      src:'', 
      category: 'pharmaceutical', 
      type: 'Capsule' },
    { name: 'Ampicillin sodium', 
      description: '1g PFI (IM/IV)', 
      src:'', 
      category: 'pharmaceutical', 
      type: 'Injection' },
    { name: 'Ampicillin sodium', 
      description: '500mg PFI (IM/IV)', 
      src:'', 
      category: 'pharmaceutical', 
      type: 'Injection' },


    { name: 'Phosphatidyl Choline + B Vitamins', 
      description: 'Softgel Capsule', 
      src: '', 
      category: 'supplements', 
      type: 'Dietary Supplement' },
    { name: 'Alatein', 
      description: 'Alpha-Lipoic Acid, Gamma Linoleic Acid, Lutein and Zeaxanthin with B-Vitamins', 
      src: '', 
      category: 'supplements', 
      type: 'Food Supplement' },
    { name: 'Alpha Lipoic Acid (ALA)', 
      description: 'Capsule', 
      src: '', 
      category: 'supplements', 
      type: 'Food Supplement' },
    { name: 'Amino Acids', 
      description: 'Softgel Capsule', 
      src: '', 
      category: 'supplements', 
      type: 'Dietary Supplement' },
    { name: 'Amino Acids with B-Vitamins', 
      description: 'Softgel Capsule', 
      src: '', 
      category: 'supplements', 
      type: 'Food Supplement' },
    { name: 'Amino Acids with B-Vitamins', 
      description: 'Softgel Capsule', 
      src: '', 
      category: 'supplements', 
      type: 'Dietary Supplement' },
    { name: 'Ampalaya', 
      description: 'Capsule', 
      src: '', 
      category: 'supplements', 
      type: 'Food Supplement' },
    { name: 'Ashitaba (Angelica keiske Koidzumi)', 
      description: 'Capsule', 
      src: '', 
      category: 'supplements', 
      type: 'Dietary Supplement' },
    

    { name: 'Air Compressing Nebulizer', 
      description: 'Combination of a nebulizer and air compressor', 
      src: '', 
      category: 'devices', 
      type: 'digital-equipments' },
    { name: 'Aneroid Sphygmomanometer', 
      description: 'Manual device used to measure blood pressure', 
      src: '', 
      category: 'devices', 
      type: 'digital-equipments' },
    { name: 'Digital Blood Pressure Monitor', 
      description: 'Used to measure blood pressure, composed of an inflatable cuff to collapse and then release the artery under the cuff in a controlled manner', 
      src: '', 
      category: 'devices', 
      type: 'digital-equipments' },
  

    { name: 'Absorbent Cotton Balls', 
      description: 'Used to remove cosmetics or to cushion fragile objects', 
      src: '', 
      category: 'devices', 
      type: 'disposable-supplies' },
    { name: 'Adult Diaper Regular', 
      description: 'Diaper made to be worn by a person with a body larger than that of an infant or toddler', 
      src: '', 
      category: 'devices', 
      type: 'disposable-supplies' },
    { name: 'Adult Diaper Premium Pull-Ups', 
      description: 'Unique incontinence briefs designed to mimic regular underwear', 
      src: '', 
      category: 'devices', 
      type: 'disposable-supplies' },


    { name: 'Arm Crutch', 
      description: 'A support used by an injured or disabled person', 
      src: '', 
      category: 'devices', 
      type: 'mobility-aid' },
    { name: 'Cane', 
      description: 'A hollow or pithy, usually slender, and often flexible jointed stem (as of a reed or bamboo)', 
      src: '', 
      category: 'devices', 
      type: 'mobility-aid' },
    { name: 'Commode Chair', 
      description: 'Used by someone who needs help going to the toilet due to illness, injury or disability', 
      src: '', 
      category: 'devices', 
      type: 'mobility-aid' },
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
    <div className='bg-[rgb(246,250,251)] dark:bg-gradient-to-r dark:from-[#2B1D49] dark:via-black dark:to-[#193043] py-5! relative'>
      <div
        className='absolute top-0 left-0 content-[""] w-full h-full'
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, hsla(178,0%,66%,0.05) 0px, hsla(178,0%,66%,0.05) 1px, transparent 1px, transparent 104px),
            repeating-linear-gradient(0deg, hsla(178,0%,66%,0.05) 0px, hsla(178,0%,66%,0.05) 1px, transparent 1px, transparent 104px),
            repeating-linear-gradient(0deg, hsla(178,0%,66%,0.07) 0px, hsla(178,0%,66%,0.07) 1px, transparent 1px, transparent 26px),
            repeating-linear-gradient(90deg, hsla(178,0%,66%,0.07) 0px, hsla(178,0%,66%,0.07) 1px, transparent 1px, transparent 26px)
          `
        }}
      ></div>
      <div className="md:max-w-[80dvw] lg:max-w-[75dvw] mx-auto! flex flex-col gap-5 items-center min-h-[88dvh] px-5! md:px-0!">
        <div 
          style={ glassmorphism }
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
        <div className='flex justify-center items-center overflow-auto w-full gap-5'>
          {uniqueTypes.map((type, index) => (
            <button
              key={index}
              style={ glassmorphism }
              className='content-[""] rounded-full mb-5!'
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
                style={ glassmorphism }
                className='border border-gray-100 rounded-lg bg-[rgba(255,255,255,0.5)] flex flex-col gap-3 p-[35px]! overflow-hidden' key={index}
              >
                {
                  product.src ? (
                    <div className='max-h-[200px] max-w-[200px] bg-white mx-auto! overflow-hidden rounded'>
                      <img
                        src={product.src}
                        alt='Image' 
                        className='object-contain h-[200px] w-[200px] hover:scale-[111%] transition-all duration-300'
                      />
                    </div>
                  ) : (
                    <div className='max-h-[200px] max-w-[200px] bg-white mx-auto! overflow-hidden rounded'>
                      <div className='relative flex items-center justify-center h-[200px] w-[200px] bg-white hover:scale-[111%] transition-all duration-300'>
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
                    </div>
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
              style={ glassmorphism }
              className='border border-gray-100 rounded-lg bg-[rgba(255,255,255,0.5)] flex flex-col gap-3 p-[35px]!'
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
