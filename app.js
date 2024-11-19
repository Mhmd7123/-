// التحقق من إذن الإشعارات عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
    if (Notification.permission === "default") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                console.log("تم السماح بالإشعارات");
            } else {
                console.log("تم رفض الإذن بالإشعارات");
            }
        });
    }
});

// تحديث الجدول وإظهار الإشعارات عند الضغط على الزر
document.getElementById("update-button").addEventListener("click", function () {
    const schedule = document.getElementById("bus-schedule");
    schedule.innerHTML = `
        <tr>
            <td>101</td>
            <td>7:10 صباحًا</td>
            <td>2:40 ظهرًا</td>
        </tr>
        <tr>
            <td>102</td>
            <td>7:20 صباحًا</td>
            <td>2:50 ظهرًا</td>
        </tr>
    `;

    // عرض شريط الإشعار
    const notificationBar = document.getElementById("notification-bar");
    notificationBar.style.display = "block";

    // إخفاء شريط الإشعار بعد 5 ثوانٍ
    setTimeout(() => {
        notificationBar.style.display = "none";
    }, 5000);

    // إرسال إشعار للمستخدم
    if (Notification.permission === "granted") {
        new Notification("تنبيه!", {
            body: "تم تحديث مواعيد الباصات!",
            icon: "https://via.placeholder.com/50",
        });
    } else {
        alert("يرجى السماح بالإشعارات لتلقي التنبيهات!");
    }
});             otherLocation = server.getOtherLocation(userRole);

                // تحديث الخريطة
                initMap(userLocation);
            },
            (error) => {
                console.error("خطأ في الحصول على الموقع:", error.message);
                alert("لم نتمكن من الوصول إلى موقعك. يرجى السماح بالوصول للموقع.");
            }
        );
    } else {
        alert("متصفحك لا يدعم ميزة الموقع الجغرافي.");
    }
}

// إعداد التطبيق عند اختيار دور المستخدم
function setupRole(role) {
    userRole = role;
    document.getElementById("role-status").textContent =
        userRole === "student" ? "طالب" : "سائق";
    document.getElementById("role-selection").style.display = "none";
    document.getElementById("map-container").style.display = "block";
    getUserLocation(); // بدء الحصول على الموقع
}

// أحداث الأزرار
document.getElementById("student-role").addEventListener("click", () => {
    setupRole("student");
});

document.getElementById("driver-role").addEventListener("click", () => {
    setupRole("driver");
});