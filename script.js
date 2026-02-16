document.addEventListener('DOMContentLoaded', function() {
    const popupBtn = document.getElementById('popupBtn');
    
    popupBtn.addEventListener('click', function() {
        // Create popup overlay
        const overlay = document.createElement('div');
        overlay.id = 'popupOverlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        `;
        
        // Create popup content
        const popup = document.createElement('div');
        popup.style.cssText = `
            background: white;
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            max-width: 400px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            animation: slideIn 0.3s ease;
        `;
        
        popup.innerHTML = `
            <h2 style="color: #667eea; margin-bottom: 20px;">🎉 Hello!</h2>
            <p style="color: #666; font-size: 18px; margin-bottom: 30px;">
                You clicked the button! This popup was created with JavaScript.
            </p>
            <button id="closePopup" style="
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                padding: 12px 30px;
                font-size: 16px;
                border-radius: 50px;
                cursor: pointer;
            ">Close</button>
        `;
        
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
        
        // Close popup when clicking close button
        document.getElementById('closePopup').addEventListener('click', function() {
            overlay.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(overlay);
            }, 300);
        });
        
        // Close popup when clicking outside
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => {
                    document.body.removeChild(overlay);
                }, 300);
            }
        });
    });
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        @keyframes slideIn {
            from { 
                opacity: 0;
                transform: translateY(-20px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});
