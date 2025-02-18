// hamburger-menu
document.getElementById('hamburger').addEventListener('click', function() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active'); // Toggle the active class to show/hide nav-links
});

// objective 
function showTab(tabId) {
    // Reset all tabs to inactive
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Activate the clicked tab
    event.target.classList.add('active');

    // Hide all content sections
    const contents = document.querySelectorAll('.contenting');
    contents.forEach(content => content.style.display = 'none');

    // Show the selected content section
    document.getElementById(tabId).style.display = 'block';
}

// program activity 
function showtab(tabId) {
    // Remove active class from all tabs
    document.querySelectorAll('.Tab').forEach(tab => tab.classList.remove('active'));
  
    // Add active class to clicked tab
    const clickedTab = [...document.querySelectorAll('.Tab')].find(tab => tab.textContent.toLowerCase().includes(tabId));
    if (clickedTab) clickedTab.classList.add('active');
  
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
  
    // Show selected tab content
    document.getElementById(tabId).classList.remove('hidden');
  }

  // explore
  document.querySelectorAll('.details').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Details are not yet available!');
    });
  });
  

// function showtab(tabId) {
//     // Reset all tabs to inactive
//     const Tabs = document.querySelectorAll('.Tab');
//     Tabs.forEach(Tab => Tab.classList.remove('active'));

//     // Activate the clicked tab
//     event.target.classList.add('active');

//     // Hide all content sections
//     const contents = document.querySelectorAll('.tab-content');
//     contents.forEach(content => content.style.display = 'none');

//     // Show the selected content section
//     document.getElementById(tabId).style.display = 'block';
// }