import './SecondComponent.css'

const SecondComponent = () => {
  return (
    <>
        <div className='four-comp mt-1'>
        {/* first two */}
            <div className='twocomp'>
                <div className='compo rounded-lg hover:bg-violet-600 hover:text-white'>
                    <div className=' divone flex font-bold text-lg'><img src='/Group.png'/><h1 className='mt-1'>People</h1></div>
                    <p>Find a teacher, coach, or expert for your hobby interest in  your locality. Find a partner, teammate, accompanist or collaborator.</p>
                    <button className='btnn rounded-md'>connect</button>
                </div>
                <div className='compo rounded-lg hover:bg-emerald-700 hover:text-white'>
                 <div className=' divone flex font-bold text-lg'><img  src='/location_on_black_24dp 1.png'/><h1 className='mt-1'>Place</h1></div>
                    <p>Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.</p>
                    <button className='btnn rounded-md'>Meet up</button>
                </div>
            </div>
         {/* second two */}
            <div className=' twocomp '>
                <div className='compo rounded-lg hover:bg-red-800 hover:text-white'>
                    <div className=' divone flex font-bold text-lg'><img src='/b.png'/><h1 className='mt-1'>Product</h1></div>
                    <p>Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.</p>
                    <button className='btnn rounded-md'>Get it</button>
                    </div>
                <div className='compo rounded-lg hover:bg-sky-700 hover:text-white'>
                    <div className=' divone flex font-bold text-lg'><img src='/h.png'/><h1 className='mt-1'>Program</h1></div>
                    <p>Find events, meetups and workshops related to your hobby. Register or buy tickets online.</p>
                    <button className='btnn rounded-md'>Attend</button>
                    </div>
            </div>
        </div>
<div className='add-y-own'>
        <div className='addYO rounded-lg bg-white'>
            <div className='  flex font-bold text-lg'><img  src='/Add.png'/><h1 className='mt-1'>Add your own</h1></div>
            <p>Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p> 
            <button className='btnn rounded-md'>Add new</button>         
        </div>
        </div>
    </>
  )
}

export default SecondComponent